import React from 'react';
import './Payments.css';
import img2 from "../../assets/Payments.svg";

const Payments = () => {
  return (
    <div className="payment">
      <div className="secure">
        <h1>Secure & Easy</h1>
        <div className="wayto">way to <br></br>Get Started.</div>
        <button className='dpbuttn'>Deposit now</button>
      </div>
      <div className="gateway">
        <img src={img2} alt="Payment Gateway" />
      </div>
    </div>
  );
}

export default Payments;
