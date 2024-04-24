import React, { useState } from "react";
import "../styles/newAd.css";

const NewAd = (props) => {
  const { isOpen, setIsOpen } = props;
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    location: "",
    condition: "",
    rentPeriod: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation here
    console.log(formData);
  };
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <i className="bi bi-x close" onClick={toggleModal}></i>

        <div className="modal-header">
          <h3>Add a New Listing</h3>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Add Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Add location
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="row">
              <div className="mb-3 col">
                <label htmlFor="condition" className="form-label">
                  Condition
                </label>
                <select
                  className="form-select"
                  id="condition"
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Condition</option>
                  <option value="New">New</option>
                  <option value="Used">Used</option>
                </select>
              </div>
              <div className="mb-3 col">
                <label htmlFor="rentPeriod" className="form-label">
                  Rent Period (months)
                </label>
                <select
                  className="form-select"
                  id="rentPeriod"
                  name="rentPeriod"
                  value={formData.rentPeriod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Rent Period</option>
                  {[...Array(12).keys()].map((month) => (
                    <option key={month + 1} value={month + 1}>
                      {month + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3 col">
                <label htmlFor="price" className="form-label">
                  Enter Price (Pkr/Month)
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAd;
