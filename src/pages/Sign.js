import React from "react";
import "./sign.css";
const Sign = () => {
  return (
    <div className='sign'>
      <div className='back'></div>
      <form>
        <h2>Sign Up</h2>
        <input type='text ' placeholder='Enter Name' />
        <input type='email ' placeholder='Enter Email' />
        <input type='password' placeholder='Enter pass' />
        <input type='submit' />
      </form>
    </div>
  );
};

export default Sign;
