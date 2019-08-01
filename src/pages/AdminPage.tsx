import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function AdminPage(props: any) {
  return (
  <div>
    <Link to="/">
      <Button buttonName="Back" />
    </Link>
    Check-in Log
  </div>
  );
}

export default AdminPage;
