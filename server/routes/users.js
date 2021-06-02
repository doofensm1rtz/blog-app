const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");

// Get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    const { password, ...other } = user._doc;

    res.status(200).json(other);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Register
router.put("/:id", async (req, res) => {
  if (req.params.id !== req.body.userID) {
    res.status(401).json("Not Allowed!");
    return;
  }

  try {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);

      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );

      res.status(200).json(updatedUser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  if (req.params.id != req.body.userID) {
    res.status(401).json("Not Allowed!");
    return;
  }

  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json("User Not Found!");
    }

    await Post.deleteMany({ username: user.username });
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json("User deleted successfully.");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
