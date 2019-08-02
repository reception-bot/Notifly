import * as React from "react";
const url = "wss://notifly.herokuapp.com:8080";
const connection = new WebSocket(url);

function Modal(props: any) {
  const [msg, setMsg] = React.useState("");
  connection.onopen = () => {
    connection.send("test from client");
  };
  connection.onmessage = e => {
    console.log(e.data);
    setMsg(e.data);
    return (
      <div>
        <div>{msg}</div>
      </div>
    );
  };

  if (msg) {
    return (
      <div>
        <div>{msg}</div>
      </div>
    );
  } else {
    return <div />;
  }
}

export default Modal;
