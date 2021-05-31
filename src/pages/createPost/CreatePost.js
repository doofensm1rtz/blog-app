import "./createPost.css";
import React from "react";

const CreatePost = () => {
  return (
    <div className="create-post">
      <form className="create-post--form">
        <div className="form-group">
          <img
            src="images/post/post_img_1.jpg"
            alt=""
            className="create-post--img"
          />
        </div>
        <div className="form-group">
          <label htmlFor="file-input" className="file-label">
            <i
              class="add-icon fas fa-plus-circle"
              title="Add image from device"
            ></i>
            <p className="file-label--text">ADD IMAGE</p>
          </label>
          <input type="file" id="file-input" />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="title-input"
            placeholder="Title..."
            autoFocus={true}
          />
        </div>
        <div className="form-group">
          <textarea
            className="description-input"
            placeholder="Tell your story..."
            rows={5}
          ></textarea>
        </div>
        <div className="form-group">
          <button className="create-btn">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
