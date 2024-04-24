import React, { useState } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import Singup from "./Signup";
const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <div className="main-container">
        <div className="left">
          <p className="heading">
            Pass <span className="italic">n</span> Play
          </p>
          <p className="tagline">Dont just play.. Pass n Play</p>
        </div>
        <div className="separator-login"></div>
        <div className="right">
          <div className="loginform">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn-primary btn">
                Login
              </button>
            </form>
            <p>
              New?{" "}
              <span onClick={toggleModal} className="link">
                Sign up
              </span>{" "}
              instead!
            </p>
          </div>
        </div>
      </div>
      <Singup isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>
  );
};

export default Login;
