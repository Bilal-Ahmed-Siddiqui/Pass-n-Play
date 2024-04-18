const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = "thatsmykey";

//sign up POST '/api/auth/signup', doesnt req auth
router.post(
  "/signup",
  [
    body("name", "name must be bigger than 5 letters").isLength({ min: 5 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password must be bigger than 5 letters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { name, email, password } = req.body;

      //hashing password
      const salt = await bcrypt.genSalt(10);
      const sec_pass = await bcrypt.hash(password, salt);

      // user creation
      const newUser = User({
        name: name,
        email: email,
        password: sec_pass,
      });
      newUser.save();

      //token generation
      const UID = {
        id: newUser.id,
      };
      const authtoken = jwt.sign(UID, JWT_SECRET_KEY);
      res.json({ authtoken });
    } else {
      return res.status(400).json({ error: errors.array() });
    }
  }
);

//sign up POST '/api/auth/login', doesnt req auth
router.post(
  "/login",
  body("email", "enter a valid email").isEmail(),
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { email, password } = req.body;
      try {
        let user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ error: "Wrong email or password" });
        }
        const passCheck = await bcrypt.compare(password, user.password);
        if (!passCheck) {
          return res.status(400).json({ error: "Wrong email or password" });
        }
        const UID = {
            id: user.id,
          };
          const authtoken = jwt.sign(UID, JWT_SECRET_KEY);
          res.json({ authtoken });
      } catch (error) {
        return res.json({ error: error.message });
      }
    } else {
      return res.status(400).json({ error: errors.array() });
    }
  }
);

module.exports = router;
