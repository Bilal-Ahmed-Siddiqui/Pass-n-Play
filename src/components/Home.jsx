import React from "react";
import Navbar from "./Navbar";
import Post from "./Post"
const home = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>Home Page</div>
      <Post></Post>
    </>
  );
};

export default home;
