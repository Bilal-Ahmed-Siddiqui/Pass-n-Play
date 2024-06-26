const jwt = require("jsonwebtoken");

const JWT_SECRET_KEY = "thatsmykey";

const fetchUser = (req, res, next) => {
  //get the user from jwt token and add id to req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please provide a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please provide a valid token" });
  }
};

module.exports = fetchUser;
