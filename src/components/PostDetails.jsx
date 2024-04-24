import React, { useContext } from "react";
import postsContext from "../context/postsContext";
import Navbar from "./Navbar";
import "../styles/postDetails.css";

const PostDetails = () => {
  const sample = {
    _id: "662207912f95831f78274932",
    user: "6621e5bdf8210fbb7537b677",
    title: "God of War: Ragnarok",
    description:
      "GoW DvD for Ps4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    location: "Karachi",
    condition: "Used",
    rentPeriod: 2,
    price: 4000,
    timeStamp: "2024-04-19T05:56:33.361Z",
    __v: 0,
  };
  const context = useContext(postsContext);
  const { posts, setposts } = context;
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <img
          src="https://cdn11.bigcommerce.com/s-sp9oc95xrw/images/stencil/1280x1280/products/21427/75639/dvd-7__43230.1706547744.png?c=2"
          className="post-details-img"
          alt="Post Image"
        />
        <div className="detail-box">
          <h5 className="title">{sample.title}</h5>
          <div className="description box">
            <p className="">
              <span>Description</span> {sample.description}{" "}
            </p>
          </div>
          <div className="details box">
            {" "}
            <p className="">Condition: {sample.condition} </p>
            <p className="">Location: {sample.location} </p>
            <p className="">Rent Period: {sample.rentPeriod} Month(s) </p>
            <p className="">
              Posted On: {new Date(sample.timeStamp).toLocaleDateString()}
            </p>
          </div>
          <div className="price box">
            <p className="">Price: {sample.price} Pkr/Month</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
