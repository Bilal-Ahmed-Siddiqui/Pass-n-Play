const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");

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
    try {
      const errors = validationResult(req);
      let success = false;
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
          user: {
            id: newUser.id,
          },
        };
        const authtoken = jwt.sign(UID, JWT_SECRET_KEY);
        success = true;
        res.json({ success, authtoken });
      } else {
        success = false;
        return res
          .status(400)
          .json({ success: success, error: errors.array() });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

//sign in POST '/api/auth/login'
router.post(
  "/login",
  body("email", "enter a valid email").isEmail(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      let success = false;
      if (errors.isEmpty()) {
        const { email, password } = req.body;
        try {
          let user = await User.findOne({ email });
          if (!user) {
            success = false;
            return res
              .status(400)
              .json({ success: success, error: "Wrong email or password" });
          }
          const passCheck = await bcrypt.compare(password, user.password);
          if (!passCheck) {
            success = false;

            return res
              .status(400)
              .json({ success: success, error: "Wrong email or password" });
          }
          const UID = {
            user: {
              id: user.id,
            },
          };
          const authtoken = jwt.sign(UID, JWT_SECRET_KEY);
          success = true;
          res.json({ success, authtoken });
        } catch (error) {
          return res.json({ error: error.message });
        }
      } else {
        success = false;
        return res
          .status(400)
          .json({ success: success, error: errors.array() });
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error!");
    }
  }
);

//fetch user data POST '/api/auth/getuser'
router.post("/getuser", fetchUser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error!");
  }
});

module.exports = router;
