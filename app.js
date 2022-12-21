const express = require("express");
const cors = require("cors");
const app = express();
const tourRouter = require("./routes/v1/tour.route");

// middleware
app.use(express.json());
app.use(cors());

// server running output
app.get("/", (req, res) => {
  res.send("Tour Management System running...... Yeah !!!");
});

// tour router
app.use("/api/v1/tour", tourRouter);

app.all("*", (req, res) => {
  res.status(404).send("Sorry!! Not found router.");
});

module.exports = app;
