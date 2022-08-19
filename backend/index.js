const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passportSetup = require("./config/passport-setup");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();
app.use(cors());
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);
app.use("/api/auth", authRoutes);

app.listen("8800", () => {
  console.log("Backend Server running");
});
