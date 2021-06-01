const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

// Environment config
dotenv.config();

const app = express();

// Enable to pass json data from body
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

// Routes
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on PORT: ${PORT}`));
