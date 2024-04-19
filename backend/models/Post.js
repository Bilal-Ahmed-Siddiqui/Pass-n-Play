const { getByTitle } = require("@testing-library/react");
const mongoose = require("mongoose");

const { Schema } = mongoose;
//title, description, condition, rentperiod, images, price, location, timestamp
const PostSchema = new schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  rentPeriod: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", PostSchema);
