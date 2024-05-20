import React, { useContext, useEffect, useState } from "react";
import postsContext from "../context/postsContext";
import Navbar from "./Navbar";
import "../styles/postDetails.css";
import { Link, useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const context = useContext(postsContext);
  const { fetchbyID, postbyID } = context;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setuser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchbyID(postId);
        if (localStorage.getItem("token")) {
          const response = await fetch(
            "http://localhost:8000/api/auth/getuser",
            {
              method: "GET",
              headers: {
                "Content-Type": "Application/json",
                "auth-token": localStorage.getItem("token"),
              },
            }
          );
          const data = await response.json();
          setuser(data._id);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar></Navbar>
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
          <div className="container">
            <img
              src="https://cdn11.bigcommerce.com/s-sp9oc95xrw/images/stencil/1280x1280/products/21427/75639/dvd-7__43230.1706547744.png?c=2"
              className="post-details-img"
              alt="Post"
            />
            <div className="detail-box">
              <h5 className="title">{postbyID.title}</h5>
              <div className="description box">
                <p className="">
                  <span>Description</span> {postbyID.description}{" "}
                </p>
              </div>
              <div className="details box">
                <p className="">Condition: {postbyID.condition} </p>
                <p className="">Location: {postbyID.location} </p>
                <p className="">Rent Period: {postbyID.rentPeriod} Month(s) </p>
                <p className="">
                  Posted On: {new Date(postbyID.timeStamp).toLocaleDateString()}
                </p>
              </div>
              <div className="price box">
                <p className="">Rent Price: {postbyID.rentPrice} Pkr/Month</p>
                <p className="">
                  Deposit Price: {postbyID.depositPrice} (Refundable)
                </p>
              </div>
              {postbyID.user !== user && (
                <Link className="btn btn-dark" to={`/Ordernow/${postId}`}>
                  Order now
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PostDetails;
