import React from 'react'
import spinWheel from '../Images/Group 1579.png'
import '../CSS/SpinWheel.css'

function SpinWheel() {
  return (
    <div className="spinWheel-container">
      <img className='spinWheel' src={spinWheel} alt="wheel" />
    </div>
  )
}

export default SpinWheel