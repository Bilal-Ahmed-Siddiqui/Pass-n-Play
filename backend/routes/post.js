const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/", (req, res) => {
  res.send("post ep");
});

//fetch all post, GET, '/api/post/fetchall', doesnt required auth

router.get("/fetchall", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json({ posts: posts });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

module.exports = router;
