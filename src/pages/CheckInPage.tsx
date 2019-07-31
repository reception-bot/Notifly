import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const CheckInPage: React.FunctionComponent<{}> = (props: any) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [event, setEvent] = React.useState(props.location.state.type);

  // used to convert JS date to SQL timestamp type
  const checkIn = () => {
    const date = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const data = {
      firstname: firstName,
      lastname: lastName,
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
    <div>
      <p>please type ur name</p>
      <div>input name and stuff here</div>
      <input
        name="first"
        placeholder="First Name"
        type="text"
        onChange={e => setFirstName(e.target.value)}
      />
      <input
        name="last"
        type="text"
        placeholder="Last Name"
        onChange={e => setLastName(e.target.value)}
      />
      <Link to="/finish">
        <input type="submit" onClick={checkIn} value="done" />
      </Link>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default CheckInPage;
