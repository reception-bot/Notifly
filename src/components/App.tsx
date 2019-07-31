import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "./Button";
import Header from "./Header";

export class App extends React.Component {
  state = {
    head1: "Welcome to Codesmith",
    head2: "To check in, tap the reason for your visit:",
    logo: ""
  };
  render() {
    return (
      <div>
        <Header header1={this.state.head1} header2={this.state.head2} />
        <Button buttonName="Interview" />
        <Button buttonName="Meeting" />
        <Button buttonName="Other" />
        <Button buttonName="Delivery" />
      </div>
    );
  }
}
