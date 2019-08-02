import * as React from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import CheckInPage from "./pages/CheckInPage";
import AdminPinPage from "./pages/AdminPinPage";
import FinishPage from "./pages/FinishPage";
import Modal from "./components/Modal";
const App: React.FunctionComponent<{}> = (props: any) => {
  return (
    <Router>
      <Modal />
      <Switch>
        <Route exact path="/checkin" component={CheckInPage} />
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/finish" component={FinishPage} />
        <Route exact path="/admin" component={AdminPinPage} />
      </Switch>
    </Router>
  );
};

export default App;
