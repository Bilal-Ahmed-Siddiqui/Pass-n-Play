const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
// const bcrypt = require('bcrypt');

//user creation POST '/api/auth/', doesnt req auth
router.post(
  "/",
  [
    body("name").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      res.send("user created");
      const { name, email, password } = req.body;
      const newUser = User({
        name: name,
        email: email,
        password: password,
      });
      newUser.save();
    } else {
      res.send("some internal error");
    }
  }
);

module.exports = router;
