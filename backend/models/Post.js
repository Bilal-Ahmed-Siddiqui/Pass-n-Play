const mongoose = require("mongoose");

const { Schema } = mongoose;
//title, description, condition, rentperiod, images, price, location, timestamp
const PostSchema = new Schema({
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
  image: {
    data: Buffer, // Store image data as Buffer
    contentType: String, // MIME type of the image
  },
  timeStamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("post", PostSchema);
