import React from "react";
import spinWheel from "../Images/Group 1579.png";
import "../CSS/SpinWheel.css";

function SpinWheel() {
  return (
    <div className="spinWheel-container">
      <div className="spinWheel-img">
        <img src={spinWheel} alt="wheel" />
      </div>
      <div className="spin-btn">
        <button>SPIN</button>
      </div>
    </div>
  );
}

export default SpinWheel;
