const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/passnplay-test";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("connected");
};

module.exports = connectToMongo;
