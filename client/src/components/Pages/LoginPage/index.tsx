import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const LoginPage = (): JSX.Element => {
  const [isMobileNumberSet, setIsMobileNumberSet] = useState(false);
  const [mobileNumberStyle, setMobileNumberStyle] = useState("flex");
  const [optStyle, setOptStyle] = useState("none");
  useEffect(() => {
    if(isMobileNumberSet){
      setMobileNumberStyle("none");
      setOptStyle("flex");
    }
  }, [isMobileNumberSet])
  
  return (
    <div className="login-div">
      {/* phone number div */}
      <div className="phone-number" style={{display: `${mobileNumberStyle}`}}>
        <div className="login-1">
          <h1 className="main-heading">
            Enter Your Mobile Number to get started
          </h1>
          <h2 className="sub-heading">
            we use your data only to let you track your users' data
          </h2>
        </div>
        <div className="login-2">
          <input type="text" className="mob-no" maxLength={10} placeholder="Enter Your Mobile Number"/>
          <button className="otp-btn" onClick={()=>{
            setIsMobileNumberSet(true);
          }}>SEND OTP</button>
        </div>
      </div>

      {/* opt div */}
      <div className="otp-div" style={{display: `${optStyle}`}}>
        <div>
          <h1 className="main-heading">Verify Your Mobile Number with OTP</h1>
          <h2 className="sub-heading">No Spams, Promise🤞</h2>
        </div>
        <div className="login">
          <div className="lil-inputs">
            <input type="text" maxLength={1} className="lil-input" />
            <input type="text" maxLength={1} className="lil-input" />
            <input type="text" maxLength={1} className="lil-input" />
            <input type="text" maxLength={1} className="lil-input" />
            <input type="text" maxLength={1} className="lil-input" />
            <input type="text" maxLength={1} className="lil-input" />
          </div>
          <Link to='/profile'><button>Verify OTP to Login 🚀</button></Link>
        </div>
      </div>
    </div>
  );
};
