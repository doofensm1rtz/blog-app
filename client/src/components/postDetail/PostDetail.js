import "./postDetail.css";
import React from "react";

const PostDetail = () => {
  return (
    <div className="post-detail">
      <div className="post-wrapper">
        <img
          src="/images/post/post_img_1.jpg"
          alt="post-detail"
          className="post-detail--img"
        />
        <h2 className="post-detail--title">
          Lorem ipsum dolor sit amet.
          <span className="post-detail--icons">
            <i className="post-icon far fa-edit"></i>
            <i className="post-icon far fa-trash-alt"></i>
          </span>
        </h2>
        <div className="post-detail--info">
          <span className="post-detail--author">
            Author: <b>John Doe</b>
          </span>
          <span className="post-detail--date">1 hour ago.</span>
        </div>
        <div className="post-detail--description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit est
          non tenetur. Magni vero voluptate excepturi eius dignissimos
          explicabo, ad porro minus eos rerum unde molestiae autem cum
          reprehenderit quisquam error illum alias, eum dolore mollitia incidunt
          facere et! Temporibus, libero et ratione nihil aliquid sunt odit
          magnam deserunt maxime officia mollitia quo ut sequi, ab dolor
          distinctio fugit? Architecto facilis deserunt dolor iure aspernatur
          modi quo, voluptates porro, vero exercitationem eos accusamus ullam
          nostrum odio qui, nesciunt repellat ab! Laboriosam delectus sapiente
          doloremque culpa nostrum harum officia eos mollitia fuga? Nobis quos
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
