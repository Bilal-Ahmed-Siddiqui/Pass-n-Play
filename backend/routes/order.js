const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");

router.post("/", (req, res) => {
  res.send("order ep");
});

module.exports = router;
