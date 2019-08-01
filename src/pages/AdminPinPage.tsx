import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import AdminPage from "../pages/AdminPage";

const AdminPinPage: React.FunctionComponent<{}> = (props: any) => {
  const [pin, setPin] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);
  const [focus, setFocus] = React.useState(1);

  const checkPin = () => {
    console.log("typed pin", pin);
    const data = {
      pin: pin
    };
    fetch("/api/adminData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(newdata => {
        console.log("newdata", newdata.body);
        if (newdata.status < 300) setRedirect(true);
        else alert("Wrong Pin");
      })
      .catch(err => {
        console.log("caught the error");
        alert(err);
      });
  };
  interface KeyboardEvent extends EventModifierInit {
    key?: string;
  }
  // for changing input focus
  const fireTab = () => {
    var evt = new KeyboardEvent("keydown", { key: "Tab" });
    document.dispatchEvent(evt);
    console.log("triggered");
  };

  if (redirect) {
    return <AdminPage />;
  } else {
    return (
      <div>
        <div>PIN NUMBER</div>
        <div className="pin-pad">
          <input
            type="text"
            pattern="[0-9]*"
            id="pinPad"
            maxLength={1}
            onChange={e => {
              setPin(e.target.value);
              fireTab();
            }}
            onKeyUp={fireTab}
          />
          <input
            type="text"
            maxLength={1}
            pattern="[0-9]*"
            id="pinPad"
            onChange={e => {
              let newPin = pin.toString().concat(e.target.value);
              setPin(newPin);
            }}
          />
          <input
            type="text"
            maxLength={1}
            pattern="[0-9]*"
            id="pinPad"
            onChange={e => {
              let newPin = pin.toString().concat(e.target.value);
              setPin(newPin);
            }}
          />
          <input
            type="text"
            maxLength={1}
            pattern="[0-9]*"
            id="pinPad"
            onChange={e => {
              let newPin = pin.toString().concat(e.target.value);
              setPin(newPin);
            }}
          />
        </div>
        <input type="submit" onClick={checkPin} value="Done" />
        <Link to="/">
          <Button buttonName="Back" />
        </Link>
      </div>
    );
  }
};

export default AdminPinPage;
