import * as React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Input from "../components/Input";

const CheckInPage: React.FunctionComponent<{}> = (props: any) => {
  const [fullName, setFullName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [event, setEvent] = React.useState(props.location.state.type);

  // used to convert JS date to SQL timestamp type
  const checkIn = () => {
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
        console.log("then:", newdata);
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <div id="checkin">
      <Header path={window.location.pathname} />
      <div id="instruction">
        <h4>{event}</h4>
        <h4 className="primary">Please type your full name</h4>
      </div>
      <input
        name="name"
        placeholder="Full name here"
        type="text"
        onChange={e => setFullName(e.target.value)}
      />
      <Link to="/finish">
        <input type="submit" onClick={checkIn} value="Done" />
      </Link>
    </div>
  );
};

export default CheckInPage;
