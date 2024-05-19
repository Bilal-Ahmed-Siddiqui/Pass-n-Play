import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import postsContext from "../context/postsContext";
import { useNavigate } from "react-router-dom";

const OrderNow = () => {
  const { postId } = useParams();
  const context = useContext(postsContext);
  const { fetchbyID, postbyID } = context;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (localStorage.getItem("token")) {
        try {
          await fetchbyID(postId);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setError("Failed to fetch data. Please try again later.");
          setLoading(false);
        }
      } else {
        navigate("/login");
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const calc_returnDate = () => {
      const currentDate = new Date();
      const futureDate = new Date(currentDate);
      futureDate.setMonth(currentDate.getMonth() + postbyID.rentPeriod);
      setReturnDate(futureDate);
    };
    calc_returnDate();
    // eslint-disable-next-line
  }, [postbyID]);
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
          <div className="ml-52">
            <div className="flex">
              <div className="flex items-center">
                <img
                  src="https://cdn11.bigcommerce.com/s-sp9oc95xrw/images/stencil/1280x1280/products/21427/75639/dvd-7__43230.1706547744.png?c=2"
                  className="w-80 h-auto"
                  alt="Post"
                />
                <div className="ml-4 mt-4">
                  <p className="font-bold text-[25px]">Ad Details</p>
                  <p className="text-lg">Title: {postbyID.title}</p>
                  <p className="text-lg">
                    Rent Period: {postbyID.rentPeriod} Month(s)
                  </p>
                  <p>Price: {postbyID.rentPrice} Pkr/Month</p>
                  <p>Price: {postbyID.depositPrice} (Returnable)</p>
                </div>
              </div>
            </div>
            <div className="ml-8">
              <p className="font-bold text-[25px]">Order Details</p>
              <p>Rent Amount: {postbyID.rentPeriod * postbyID.rentPrice} Rs</p>
              <p>Deposit Amount: {postbyID.depositPrice}</p>
              <p>Delivery Charges: 500</p>
              <p>Total: {postbyID.depositPrice + 500}</p>
              <p>
                Amount Returned after DVD is delivered back:{" "}
                {postbyID.depositPrice -
                  postbyID.rentPeriod * postbyID.rentPrice}
              </p>
              <p>Must be returned by: {returnDate.toDateString()}</p>
              <div className="mt-4">
                <label htmlFor="deliveryAddress" className="block mb-2">
                  Delivery Address:
                </label>
                <input
                  type="text"
                  id="deliveryAddress"
                  name="deliveryAddress"
                  placeholder="Enter your delivery address"
                  className="border rounded-md py-2 px-3 w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderNow;
