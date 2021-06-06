const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// Create post
router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    const savedPost = await post.save();

    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json("error");
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username !== req.body.username) {
      res.status(401).json("Not Allowed!");
      return;
    }

    post.title = req.body.title;
    post.description = req.body.description;
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("error");
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.username !== req.body.username) {
      res.status(401).json("Not Allowed!");
      return;
    }

    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Post deleted successfully.");
  } catch (error) {
    res.status(500).json("error");
  }
});

// Get single post based in ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("error");
  }
});

// Get post based on queries
router.get("/", async (req, res) => {
  const username = req.query.user;
  const category = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (category) {
      posts = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      posts = await Post.find();
    }

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json("error");
  }
});

module.exports = router;
