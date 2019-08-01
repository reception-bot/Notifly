import * as React from "react";
import { Route, Redirect } from "react-router";

function FinishPage(props: any) {
  // need to implement a more react-type solution
  window.setTimeout(() => {
    window.location.href = "http://localhost:3000";
  }, 5000);
  return <div>Done! Finish page</div>;
}

export default FinishPage;
