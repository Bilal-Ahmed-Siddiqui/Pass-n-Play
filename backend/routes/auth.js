const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

//user creation POST '/api/auth/', doesnt req auth
router.post(
  "/",
  [
    body("name").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (result.isEmpty()) {
      const { name, email, password } = req.body;

      const salt = await bcrypt.genSalt(10);
      const sec_pass = await bcrypt.hash(password, salt);
      
      const newUser = User({
        name: name,
        email: email,
        password: sec_pass,
      });
      newUser.save();
      res.send("user created");
    } else {
      res.send("some internal error");
    }
  }
);

module.exports = router;
