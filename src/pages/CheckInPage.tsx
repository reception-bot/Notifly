import * as React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";

const CheckInPage: React.FunctionComponent<{}> = (props: any) => {
  const [fullName, setFullName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [event, setEvent] = React.useState(props.location.state.type);
  const [redirect, setRedirect] = React.useState();
  const [errorIsVisible, setErrorVisibility] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);

  // used to convert JS date to SQL timestamp type
  const checkIn = () => {
    setIsFailed(false);
    if (fullName.length < 2) {
      console.log('incomplete name');
      setErrorVisibility(true);
      return;
    } else {
      setErrorVisibility(false);
    }
    setIsLoading(true);
    const date = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const data = {
      firstname: fullName.split(' ')[0],
      lastname: fullName.split(' ')[1],
      reason: event,
      date: date
    };
    console.log(`payload: ${JSON.stringify(data)}`);
    fetch("/api/postVisitorData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        setIsLoading(false);
        if (response.status === 200) {
          setRedirect(<Redirect push to={{ pathname: "/finish", state: { firstName: fullName.split(' ')[0], type: event} }} />);
        } else {
          setIsFailed(true);
        }
        console.log("response", response);
      })
      .catch(err => {
        setIsLoading(false);
        alert(err);
      });
  };

  const onEnter = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      checkIn();
    }
  };

  return (
    <div id="checkin">
      <Navigation />
      <Header />
      <div id="instruction">
        <h4>{event}</h4>
        <h4 className="primary">Please type your full name</h4>
        <h4 className="error" style={{ opacity: (errorIsVisible) ? 1 : 0 }}>Name must be more than 2 letters</h4>
      </div>
      <input
        name="name"
        placeholder="Full name here"
        type="text"
        autoFocus
        onChange={e => setFullName(e.target.value)}
        onKeyUp={onEnter}
      />
      <div id="failed" style={{ display: ((isFailed) ? 'block' : 'none') }}>Something went wrong: please try again or find someone nearby.</div>
      <input type="submit" onClick={checkIn} value="Done" className={(isLoading) ? 'loading' : ''} />
      {redirect}
    </div>
  );
};

export default CheckInPage;
