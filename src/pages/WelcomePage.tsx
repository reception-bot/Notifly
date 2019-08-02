import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "../components/Button";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import { Route, Link, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

function WelcomePage(props: any) {
  const [redirect, setRedirect] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  let state = {
    head1: "Welcome to Codesmith",
    head2: "To check in, tap the reason for your visit:"
  };

  const deliveryCheckIn = () => {
    const event = 'Delivery';
    setIsLoading(true);
    const date = new Date()
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const data = {
      firstname: '-',
      lastname: '-',
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
          setRedirect(<Redirect push to={{ pathname: "/finish", state: { type: event} }} />);
        }
        console.log("response", response);
      })
      .catch(err => {
        alert(err);
      });
  };

  return (
    <div>
      <Navigation />
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
      <a onClick={deliveryCheckIn} className={'secondary' + ((isLoading) ? ' loading' : '')}>
        Delivery
      </a>
      {redirect}
    </div>
  );
}

export default WelcomePage;
