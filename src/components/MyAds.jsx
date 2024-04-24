import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import NewAd from "./NewAd";
import "../styles/myAds.css";
import postsContext from "../context/postsContext";

const MyAds = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(postsContext);
  const { userposts, fetchUserPost } = context;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUserPost();
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="Ad-header box">
        <h2>Your Uploaded Adverts</h2>
        <i className="bi bi-plus-square" onClick={toggleModal}></i>
      </div>
      <NewAd isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="post-container">
        {loading ? (
          <div className="preloader text-center container-fluid my-3">
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="container">
            <h5>{error}</h5>
          </div>
        ) : (
          userposts.map((userposts) => (
            <Post
              id={userposts._id}
              title={userposts.title}
              price={userposts.price}
            ></Post>
          ))
        )}
      </div>
    </>
  );
};

export default MyAds;
