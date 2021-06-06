import "./postDetail.css";
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateState, setUpdateState] = useState(false);

  const getPost = async () => {
    const url = "/posts/" + id;
    const res = await axios.get(url);
    setPost(res.data);
    setTitle(res.data.title);
    setDescription(res.data.description);
  };

  const deletePost = () => {
    axios
      .delete("/posts/" + post._id, { data: { username: user.username } })
      .then((res) => {
        window.location.replace("/");
      })
      .catch((res) => console.log(res));
  };

  const editPost = () => {
    setUpdateState(true);
  };

  const handleSubmit = () => {
    axios
      .put("/posts/" + post._id, {
        username: user.username,
        title,
        description,
      })
      .then((res) => {
        setUpdateState(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPost();
  }, []);

  const public_path = "http://localhost:5000/images/";

  return (
    <div className="post-detail">
      <div className="post-wrapper">
        {post.postImage && (
          <img
            src={public_path + post.postImage}
            alt="post-detail"
            className="post-detail--img"
          />
        )}
        {!updateState ? (
          <h2 className="post-detail--title">
            {title}
            {post.username === user.username ? (
              <span className="post-detail--icons">
                <i className="post-icon far fa-edit" onClick={editPost}></i>
                <i
                  className="post-icon far fa-trash-alt"
                  onClick={deletePost}
                ></i>
              </span>
            ) : (
              ""
            )}
          </h2>
        ) : (
          <input
            className="post-title--input"
            type="text"
            autoFocus
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        )}
        <div className="post-detail--info">
          <span className="post-detail--author">
            Author:
            <Link to={`/?user=${post.username}`} className="react-link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="post-detail--date">
            Date: <Moment format="DD-MMM-YYYY">{post.createdAt}</Moment>
          </span>
        </div>
        {!updateState ? (
          <div className="post-detail--description">{description}</div>
        ) : (
          <>
            <textarea
              className="post-description--input"
              rows={5}
              placeholder="Description..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
            <button className="update-btn" onClick={handleSubmit}>
              Update
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
