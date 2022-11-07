const express = require("express");
const cors = require("cors");

// routes
const user = require("./routes/user");
const blog = require("./routes/blog");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

// use cors
app.use(cors());

// parse information from request body
app.use(express.json());

app.use("/", user);
app.use("/api/blog", blog);
app.use(errorHandler);

// Home Route
app.get("/", (req, res) => {
  return res.status(200).send({
    message: "Welcome to your Blog",
    status: true,
  });
});

// Undefined route
app.get("*", (req, res) => {
  return res.status(404).send({
    status: false,
    message: "Route not found",
  });
});

module.exports = { app };
