import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const CheckInPage: React.FunctionComponent<{}> = (props: any) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [event, setEvent] = React.useState(props.location.state.type);
<<<<<<< HEAD

  // React.useEffect(() => {
  //   console.log(firstName);
  //   console.log(lastName);
  //   console.log(event);
  // });

  const checkIn = () => {
    console.log(firstName + lastName + event);
  };
=======
  
  const checkIn = () => {
    console.log('here',firstName + lastName + event);
    // fetch('/', {
    //   method:'POST'
    //   }
    // })
  }
>>>>>>> 986a7f6acacd9a0513307a6322dd6f1eb1e5ddb0

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
<<<<<<< HEAD
        <input type="submit" onClick={checkIn} value="done" />
=======
      <input type="submit" onClick={checkIn} value="done" />
>>>>>>> 986a7f6acacd9a0513307a6322dd6f1eb1e5ddb0
      </Link>
      <Link to="/">
        <Button buttonName="Back" />
      </Link>
    </div>
  );
};

export default CheckInPage;
