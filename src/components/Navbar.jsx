import React, { useState } from "react";
import Sidebar from "./Sidebar";


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand mb-0 h1 order-lg-2">Pass n Play</span>
        <div className="col-lg-4 order-lg-1">
          <form className="input-group w-100">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} /></>
  );
};

export default Navbar;
