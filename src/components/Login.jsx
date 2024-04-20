import React from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
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
              <input type="email" id="email" name="email" placeholder="Email" />
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
            New? <Link to="/Signup" className="link">Sign up</Link> instead!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
