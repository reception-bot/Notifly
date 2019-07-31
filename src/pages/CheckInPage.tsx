import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const CheckInPage: React.FunctionComponent<{}> = (props: any) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [event, setEvent] = React.useState(props.location.state.type);
  
  const checkIn = () => {
    console.log('here',firstName + lastName + event);
    // fetch('/', {
    //   method:'POST'
    //   }
    // })
  }

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
        <Button buttonName="Back" />
      </Link>
    </div>
  );
};

export default CheckInPage;
