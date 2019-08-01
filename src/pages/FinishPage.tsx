import * as React from "react";
import styled from "styled-components";
import Header from "../components/Header";

const FinishPage: React.FunctionComponent<{}> = (props: any) => {
  // need to implement a more react-type solution
  console.log("✅", props.location.state.type);
  // window.setTimeout(() => {
  //   window.location.href = "https://notifly.herokuapp.com";
  // }, 3000);

  let welcome = (
    <h2>Thanks, someone will be with you shortly.</h2>
  );
  if (props.location.state.type != 'Delivery') {
    welcome = (
      <React.Fragment>
        <h2>Welcome, {props.location.state.firstName}!</h2>
        <h3>Have a seat, someone will be with you shortly.</h3>
      </React.Fragment>
    );
  }

  return (
    <div id="finished">
      <Header />
      {welcome}
    </div>
  );
};

export default FinishPage;
