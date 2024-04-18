const connectToMongo = require("./db");
const express = require("express");

connectToMongo();

const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("hello");
});

//routes
app.use("/api/auth", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Pass n Play listening on http://localhost:${port}`);
});
