import React from "react";
import "./Passing.css";
import Btn from "../UI/Btn";
import { NavLink } from "react-router-dom";

export default function Passing() {
  return (
    <main className="container-sm passing">
      <div className="passing-content">
        <h1 className="txt-md">What's your phone number or email?</h1>
        <form action="" className="txt-sm">
          <input type="text" placeholder="Enter phone number or email" />
          <Btn BtnTxt="Continue" BtnStyle="dark" />
        </form>
        <div className="section-break">
          <div className="before-line"></div>
          <p>or</p>
          <div className="after-line"></div>
        </div>
        <div className="auth">
          <img src="public\images\189824.jpg" alt="" />
          <p>Continue with Google</p>
        </div>
        <div className="auth">
          <img src="public\images\572947.jpg" alt="" />
          <p>Continue with Apple</p>
        </div>
        <div className="section-break">
          <div className="before-line"></div>
          <p>or</p>
          <div className="after-line"></div>
        </div>
        <NavLink>Log in with QR code</NavLink>
        <p className="txt-xs">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </main>
  );
}
