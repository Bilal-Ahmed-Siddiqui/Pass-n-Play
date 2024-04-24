import React, { useContext, useEffect, useState } from "react";
import "../styles/post.css";
import postsContext from "../context/postsContext";
import { Link } from "react-router-dom";

const Post = () => {
  const context = useContext(postsContext);
  const { posts, fetchAll } = context;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchAll();
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
        posts.map((post) => (
          <div key={post._id} className="card post-card">
            <img
              src="https://cdn11.bigcommerce.com/s-sp9oc95xrw/images/stencil/1280x1280/products/21427/75639/dvd-7__43230.1706547744.png?c=2"
              className="card-img-top post-img"
              alt="Post Image"
            />
            <div className="card-body">
              <div>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">Price: {post.price} Pkr/Month</p>
              </div>
              <Link className="btn btn-dark" to="/PostDetails">
                View Details
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Post;
