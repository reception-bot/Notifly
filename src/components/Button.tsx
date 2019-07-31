import * as React from "react";

function Button(props: any) {
  console.log(props);
  return (
    <div>
      <button>{props.buttonName}</button>
    </div>
  );
}

export default Button;
