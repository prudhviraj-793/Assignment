import React from "react";
import spinWheel from "../Images/well 2.png";
import '../CSS/Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
    function loginHandler(e) {
        e.preventDefault()
        setTimeout(() => {
            navigate('/spinWheel')
        }, 1000)
    }
  return (
    <div className="login-conatiner">
      <div className="spinWheel">
        <img src={spinWheel} alt="spinWheel" />
      </div>
      <div className="login-form">
        <h5>This is how EngageBud looks like in action!</h5>
        <form onSubmit={loginHandler}>
          <div>
            <label>Email</label>
            <input type="email" placeholder="joe@gmail.com" required />
          </div>
          <div>
            <label>Phone number</label>
            <input type="text" placeholder="+91 98256 XXXXX" required />
          </div>
          <div className="t-c">
            <input type="checkbox" required />
            <label>
              I agree to receiving recurring automated messages at the number I
              have provided. Consent is not a condition to purchase.
            </label>
          </div>
          <div>
            <button className="button">Try your luck</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
