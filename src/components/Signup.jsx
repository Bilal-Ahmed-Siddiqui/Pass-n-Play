import React from "react";
import "../styles/signup.css";

const Singup = (props) => {
  const { isOpen, setIsOpen } = props;
  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="close btn" onClick={toggleModal}>
          &times;
        </button>

        <div className="modal-header">
          <div className="head">
            <h3>WELCOME, LETS GET YOU IN QUICKLY!</h3>
          </div>
        </div>
        <div className="modal-body">
          <form>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="User Name"
            />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Email" />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;
