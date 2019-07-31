import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const AdminPinPage: React.FunctionComponent<{}> = (props: any) => {
  return (
    <div>
      <p>please type ur pin</p>
      <div>input pin here</div>
      <input type="text" pattern="[0-9]*" name="pinPad" />
      <Link to="/">
        <Button buttonName="Back" />
      </Link>
    </div>
  );
};

export default AdminPinPage;
