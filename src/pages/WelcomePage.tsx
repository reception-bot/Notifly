import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

function WelcomePage(props: any) {
  let state = {
    head1: "Welcome to Codesmith",
    head2: "To check in, tap the reason for your visit:"
  };
  return (
    <div>
      <Header />
      <h1>{state.head1}</h1>
      <h4>{state.head2}</h4>
      <Link to={{ pathname: "/checkin", state: { type: "Interview" } }} className="primary">
        Interview
      </Link>
      <Link to={{ pathname: "/checkin", state: { type: "Meeting" } }} className="primary">
        Meeting
      </Link>
      <Link to={{ pathname: "/checkin", state: { type: "Other" } }} className="primary">
        Other
      </Link>
      <Link to={{ pathname: "/checkin", state: { type: "Delivery" } }} className="secondary">
        Delivery
      </Link>
    </div>
  );
}

export default WelcomePage;
