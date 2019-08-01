import * as React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";

const CheckInPage: React.FunctionComponent<{}> = (props: any) => {
  const [fullName, setFullName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [event, setEvent] = React.useState(props.location.state.type);
  const [redirect, setRedirect] = React.useState();
  const [errorIsVisible, setErrorVisibility] = React.useState(false);

  // used to convert JS date to SQL timestamp type
  const checkIn = () => {
    if (fullName.length < 2) {
      console.log('incomplete name');
      setErrorVisibility(true);
      return;
    } else {
      setErrorVisibility(false);
    }
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
      .then(newdata => {
        setRedirect(<Redirect push to={{ pathname: "/finish", state: { firstName: fullName.split(' ')[0], type: event} }} />)
        console.log("then:", newdata);
      })
      .catch(err => {
        setRedirect(<Redirect push to={{ pathname: "/finish", state: { firstName: fullName.split(' ')[0], type: event} }} />)
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
      <input type="submit" onClick={checkIn} value="Done" />
      {redirect}
    </div>
  );
};

export default CheckInPage;
