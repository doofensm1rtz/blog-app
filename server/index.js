const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Environment config
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT: ${PORT}`));
