import * as React from "react";

function Button(props: any) {
  return (
    <div>
      <button
        onClick={e => {
          props.Click(e);
        }}
      >
        {props.buttonName}
      </button>
    </div>
  );
}

export default Button;
