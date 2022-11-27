import React from "react";
import spinWheel from "../Images/well 2.png";
import "../CSS/Result.css";
import { useNavigate } from "react-router-dom";

function Result() {
    const navigate = useNavigate()
    function closeHandler(e) {
        e.preventDefault()
        navigate('/')
    }
  return (
    <div className="result-conatiner">
      <div className="result-img">
        <img className="result-spinwheel" src={spinWheel} alt="spinWheel" />
      </div>
      <div className="result">
        <h5>Congrats! You Won:</h5>
        <h4>20% Off Coupon on Best Sellers</h4>
        <div className="code">
          <input type="text" value="XAXPDF20" />
          <label>COPY</label>
        </div>
        <div>
          <button onClick={closeHandler} className="button">Close Panel & Copy</button>
        </div>
      </div>
    </div>
  );
}

export default Result;
