import * as React from "react";

function Input(props: any) {
  return (
    <div>
      <p>{props.name}</p>
      <input type={props.type} />
    </div>
  );
}

export default Input;
