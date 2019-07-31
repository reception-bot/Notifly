import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function WelcomePage(props: any) {
  let state = {
    head1: "Welcome to Codesmith",
    head2: "To check in, tap the reason for your visit:",
    logo: ""
  };
  return (
    <div>
      <Header header1={state.head1} header2={state.head2} />
      <Link to={{ pathname: "/checkin", state: { type: "Interview" } }}>
        <Button buttonName="Interview" />
      </Link>
      <Link to={{ pathname: "/checkin", state: { type: "Meeting" } }}>
        <Button buttonName="Meeting" />
      </Link>
      <Link to={{ pathname: "/checkin", state: { type: "Other" } }}>
        <Button buttonName="Other" />
      </Link>
      <Link to={{ pathname: "/checkin", state: { type: "Delivery" } }}>
        <Button buttonName="Delivery" />
      </Link>
    </div>
  );
}

export default WelcomePage;
