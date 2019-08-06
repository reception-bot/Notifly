import * as React from "react";

function Button(props: any) {
  console.log(props);
  return (
    <div>
      <button className="b-primary">{props.buttonName}</button>
    </div>
  );
}

export default Button;
