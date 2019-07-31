import * as React from "react";
import { Link } from "react-router-dom";

function Header(props: any) {
  return (
    <div>
      <Link to="/admin">
        <img />
        admin
      </Link>
      <div>
        <img src="" alt="Logo" />
      </div>
      <div id="header_1">{props.header1}</div>
      <div id="header_2">{props.header2}</div>
    </div>
  );
}

export default Header;
