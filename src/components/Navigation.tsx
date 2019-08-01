import * as React from "react";
import { Link } from "react-router-dom";

const Navigation = (props: any) => {
  
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
    <nav>
      <Link to="/" id="exit-button">{exitText}</Link>
      <Link to="/admin" id="admin-button">{(path !== '/admin') ? '•••' : ''}</Link>
    </nav>
  );

}

export default Navigation;