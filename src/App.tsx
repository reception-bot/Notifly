import * as React from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import CheckInPage from "./pages/CheckInPage";
import AdminPinPage from "./pages/AdminPinPage";
import FinishPage from "./pages/FinishPage";

export class App extends React.Component {
  state = {
    head1: "Welcome to Codesmith",
    head2: "To check in, tap the reason for your visit:",
    logo: ""
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/checkin' component={CheckInPage} />
            <Route exact path='/' component={WelcomePage} />
            <Route exact path='/finish' component={FinishPage} />
            <Route exact path='/admin' component={AdminPinPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
