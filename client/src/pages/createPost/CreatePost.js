import "./createPost.css";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const CreatePost = () => {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      description,
    };

    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append("name", filename);
      formData.append("file", file);
      newPost.postImage = filename;
      axios
        .post("/upload", formData)
        .then((res) => console.log(res))
        .catch((res) => console.log(res));
    }

    axios
      .post("/posts", newPost)
      .then((res) => window.location.replace("/post/" + res.data._id))
      .catch((err) => console.log(err));
  };

  return (
    <div className="create-post">
      <form className="create-post--form" onSubmit={handleSubmit}>
        <div className="form-group">
          {file && (
            <img
              src={URL.createObjectURL(file)}
              alt=""
              className="create-post--img"
            />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="file-input" className="file-label">
            <i
              class="add-icon fas fa-plus-circle"
              title="Add image from device"
            ></i>
            <p className="file-label--text">ADD IMAGE</p>
          </label>
          <input
            type="file"
            id="file-input"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="title-input"
            placeholder="Title..."
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <textarea
            className="description-input"
            placeholder="Tell your story..."
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <button className="create-btn" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
