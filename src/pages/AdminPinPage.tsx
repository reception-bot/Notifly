import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import AdminPage from "../pages/AdminPage";
import { motion } from "framer-motion";

const AdminPinPage: React.FunctionComponent<{}> = (props: any) => {
  const [pin, setPin] = React.useState("");
  const [redirect, setRedirect] = React.useState(false);
  const [adminData, setadminData] = React.useState([]);

  const checkPin = () => {
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
      .then(res => {
        if (res.status < 300) return res.json();
        else throw new Error("Wrong Pin");
      })
      .then(res => {
        setadminData(res);
        setRedirect(true);
      })
      .catch(err => {
        alert(err);
      });
  };

  // for changing input focus
  const moveOnMax = function(field: any, nextFieldID: any) {
    console.log("AGGGGGH");
    if (field.length === 1) {
      document.getElementById(nextFieldID).focus();
    }
  };

  const onEnter = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      checkPin();
    }
  };

  // animation
  const pinPadMotion = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  if (redirect) {
    return <AdminPage tableData={adminData} />;
  } else {
    return (
      <motion.div
        className='pin-pad'
        initial='hidden'
        animate='visible'
        variants={pinPadMotion}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 500 },
          default: { duration: 0.3 }
        }}>
        <div className='h-1'>Enter your pin</div>
        <div>
          <input
            type='password'
            pattern='[0-9]*'
            className='pinPad'
            maxLength={1}
            autoFocus
            onChange={e => {
              setPin(e.target.value);
              moveOnMax(e.target.value, "2");
            }}
          />
          <input
            type='password'
            maxLength={1}
            pattern='[0-9]*'
            className='pinPad'
            id='2'
            onChange={e => {
              let newPin = pin.toString().concat(e.target.value);
              setPin(newPin);
              moveOnMax(e.target.value, "3");
            }}
          />
          <input
            type='password'
            maxLength={1}
            pattern='[0-9]*'
            className='pinPad'
            id='3'
            onChange={e => {
              let newPin = pin.toString().concat(e.target.value);
              setPin(newPin);
              moveOnMax(e.target.value, "4");
            }}
          />
          <input
            type='password'
            maxLength={1}
            pattern='[0-9]*'
            className='pinPad'
            id='4'
            onKeyUp={onEnter}
            onChange={e => {
              let newPin = pin.toString().concat(e.target.value);
              setPin(newPin);
            }}
          />
        </div>
        <motion.input
          whileTap={{ scale: 0.9 }}
          className='submit-pin'
          type='submit'
          onClick={checkPin}
          value='Done'
        />
        <Link to='/'>
          <Button buttonName='Back' />
        </Link>
      </motion.div>
    );
  }
};

export default AdminPinPage;
