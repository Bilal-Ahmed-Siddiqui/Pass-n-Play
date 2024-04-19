const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/", (req, res) => {
  res.send("post ep");
});

module.exports = router;
