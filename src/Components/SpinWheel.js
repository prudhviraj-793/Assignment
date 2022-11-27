import React from "react";
import spinWheel from "../Images/Group 1579.png";
import "../CSS/SpinWheel.css";
import { useState } from "react";
import pointer from "../Images/Group 1577.png";
import { useNavigate } from "react-router-dom";

function SpinWheel() {
  const [state, setState] = useState(false);
  const navigate = useNavigate()
  function spinHandler(e) {
    e.preventDefault();
    setState(!state);
    setTimeout(() => {
      navigate('/result')
    }, 6000)
  }
  return (
    <div className="spinWheel-container">
      <div className="spinWheel-img ">
        <img
          className={state ? "spin-wheel" : ""}
          src={spinWheel}
          alt="wheel"
        />
        <img className="pointer" src={pointer} alt="pointer" />
      </div>
      <div className="spin-btn">
        <button onClick={spinHandler}>SPIN</button>
      </div>
    </div>
  );
}

export default SpinWheel;
