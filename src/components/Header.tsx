import * as React from "react";

function Header(props: any) {
  return (
    <div>
      <div>
        <img src="" alt="Logo" />
      </div>
      <div id="header_1">{props.header1}</div>
      <div id="header_2">{props.header2}</div>
    </div>
  );
}

export default Header;
