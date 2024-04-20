import React from "react";
import "../styles/sidebar.css";
import profileIcon from "../images/profile-icon.jpg";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <div className="profile-info">
          <div className="profile-icon">
            <img src={profileIcon} alt="profile icon" />
          </div>
          <div>
            <h4>Your Name</h4>
            <Link to="/profile">Edit Profile</Link>
          </div>
        </div>
        <button className="btn closebtn" onClick={toggle}>
          ×
        </button>
      </div>
      <div className="separator-sidebar"></div>
      <ul className="list-group">
        <Link to="/" className="text-decoration-none link" onClick={toggle}>
          <div className="list-group-item">
            <i className="bi-house"></i>
            Home
          </div>
        </Link>
        <Link
          to="/myads"
          className="text-decoration-none link"
          onClick={toggle}
        >
          <div className="list-group-item">
            <i className="bi-controller"></i>
            My Ads
          </div>
        </Link>
        <Link
          to="/About"
          className="text-decoration-none link"
          onClick={toggle}
        >
          <div className="list-group-item">
            <i className="bi-info-circle"></i>
            About
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
