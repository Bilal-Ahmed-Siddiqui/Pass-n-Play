const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");

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

//create post, POST, '/api/post/create', requires auth
router.post(
  "/create",
  fetchUser,
  [
    body("title", "Title can not be empty").not().isEmpty(),
    body("description", "Description can not be empty").not().isEmpty(),
    body("rentPeriod", "Rent period can not be empty").not().isEmpty(),
    body("location", "Location can not be empty").not().isEmpty(),
    body("condition", "Condition can not be empty").not().isEmpty(),
    body("price", "Price can not be empty").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors });
      }
      const { title, description, rentPeriod, location, condition, price } =
        req.body;

      const newPost = Post({
        user: req.user.id,
        title,
        description,
        rentPeriod,
        location,
        condition,
        price,
      });
      newPost.save();

      res.send("Post Uploaded!");
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);


module.exports = router;
