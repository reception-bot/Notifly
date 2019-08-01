import * as React from "react";
import { Link } from "react-router-dom";

function Header(props: any) {
  
  const path = window.location.pathname;
  let exitText = ' ';
  switch(path) {
    case '/finish':
    case '/admin':
      exitText = 'Close';
      break;
    case '/checkin':
      exitText = '< Cancel';
      break;
    default:
      break;
  }

  return (
    <header>
      <nav>
        <Link to="/" id="exit-button">{exitText}</Link>
        <Link to="/admin" id="admin-button">•••</Link>
      </nav>
      <img src="/src/images/codesmith.svg" alt="Codesmith logo" />
    </header>
  );

}

export default Header;
