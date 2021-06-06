import "./post.css";
import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const public_path = "http://localhost:5000/images/";

  return (
    <div className="post">
      {post.postImage && (
        <img
          className="post-img"
          src={public_path + post.postImage}
          alt="post"
        />
      )}
      <div className="post-info">
        <div className="post-categories">
          {post.categories.map((category) => (
            <span className="post-category">{category.name}</span>
          ))}
        </div>
        <Link to={`post/${post._id}`} className="react-link">
          <span className="post-title">{post.title}</span>
        </Link>
        <hr />
        <span className="post-date">
          <Moment format="DD-MMM-YYYY">{post.createdAt}</Moment>
        </span>
      </div>
      <p className="post-description">{post.description}</p>
    </div>
  );
};

export default Post;
