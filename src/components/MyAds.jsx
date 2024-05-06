import React, { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import Post from "./Post";
import NewAd from "./NewAd";
import "../styles/myAds.css";
import postsContext from "../context/postsContext";

const MyAds = () => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(postsContext);
  const { userposts, fetchUserPost, deletePost } = context;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleEdit = async (id) => {
    console.log(id);
  };
  const handleDelete = async (id) => {
    deletePost(id);
    console.log(id);
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
          <div className="myad-box">
            {userposts.map((userpost) => (
              <div key={userpost._id} className="post-wrapper">
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id={`dropdownMenuButton_${userpost._id}`}
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    &#10247;
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby={`dropdownMenuButton_${userpost._id}`}
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleEdit(userpost._id)}
                      >
                        Edit Ad
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        onClick={() => handleDelete(userpost._id)}
                      >
                        Delete Ad
                      </a>
                    </li>
                  </ul>
                </div>
                <Post
                  id={userpost._id}
                  title={userpost.title}
                  price={userpost.price}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyAds;
