import React, { useState } from "react";
import "../styles/signup.css";

const Singup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleModal}>
        {isOpen ? "Close" : "Open Signup Modal"}
      </button>
      <div className="modal-content">
        <button className="close btn" onClick={toggleModal}>
          &times;
        </button>

        <div className="modal-header">
          <div className="head"><h2>Sign Up</h2></div>
        </div>
        <div className="modal-body">
          <form>
          <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="User Name"/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email"/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password"/>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
