import "./postDetail.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const getPost = async () => {
    const url = "/posts/" + id;
    const res = await axios.get(url);
    setPost(res.data);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="post-detail">
      <div className="post-wrapper">
        {post.postImage && (
          <img
            src={post.postImage}
            alt="post-detail"
            className="post-detail--img"
          />
        )}
        <h2 className="post-detail--title">
          {post.title}
          <span className="post-detail--icons">
            <i className="post-icon far fa-edit"></i>
            <i className="post-icon far fa-trash-alt"></i>
          </span>
        </h2>
        <div className="post-detail--info">
          <span className="post-detail--author">
            Author:
            <Link to={`/?user=${post.username}`} className="react-link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="post-detail--date">
            <b>Created On:</b>{" "}
            <Moment format="DD-MMM-YYYY">{post.createdAt}</Moment>
          </span>
        </div>
        <div className="post-detail--description">{post.description}</div>
      </div>
    </div>
  );
};

export default PostDetail;
