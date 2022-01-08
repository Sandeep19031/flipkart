import React from "react";
import "./login.css";
import { useState } from "react";

function Login(params) {
  console.log(params);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  return (
    <div className="loginPage">
      <div className="leftPage"></div>
      <div className="rightPage">
        <div className="form_group">
          <input
            className="login-signIn"
            type="text"
            placeholder=" "
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <span className="placeholder">Email/Mobile.No</span>
        </div>
        <div className="form_group">
          <input
            className="login-signIn"
            type="text"
            placeholder=" "
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <span className="placeholder">Password</span>
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              params.setEmail(email);
              params.setPassword(password);
              params.setIsLogin(true);
            }}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => {
              params.setEmail(email);
              params.setPassword(password);
              params.setIsLogin(false);
            }}
          >
            Sign-In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
