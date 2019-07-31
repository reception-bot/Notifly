import * as React from "react";

function Input(props: any) {
  return (
    <div>
      <p>{props.name}</p>
      <input
        type={props.type}
        onSubmit={() => {
          props.submit;
        }}
      />
    </div>
  );
}

export default Input;
