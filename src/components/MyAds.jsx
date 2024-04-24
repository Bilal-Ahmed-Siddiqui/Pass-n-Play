import React, { useState } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import NewAd from "./NewAd";
import "../styles/myAds.css";

import { Link } from "react-router-dom";
const MyAds = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="Ad-header box">
        <h2>Your Uploaded Adverts</h2>
        <i class="bi bi-plus-square" onClick={toggleModal}></i>
      </div>
      <NewAd isOpen={isOpen} setIsOpen={setIsOpen} />
      <Post></Post>
    </>
  );
};

export default MyAds;
