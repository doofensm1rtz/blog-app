/* eslint-disable jsx-a11y/img-redundant-alt */
import "./sidebar.css";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <div className="sidebar-title">about me</div>
        <img
          src="/images/sidebar/sidebar_img_1.jpg"
          alt="sidebar about me image"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          hendrerit mollis. Mauris et lectus augue. Maecenas at ex non dolor
          laoreet commodo at non leo.{" "}
        </p>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-title">categories</div>
        <ul className="sidebar-list">
          <li className="sidebar-list--item">Music</li>
          <li className="sidebar-list--item">Games</li>
          <li className="sidebar-list--item">Movies</li>
          <li className="sidebar-list--item">Style</li>
          <li className="sidebar-list--item">Tech</li>
          <li className="sidebar-list--item">Nature</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <div className="sidebar-title">follow us</div>
        <div className="sidebar-social">
          <i className="sidebar-icon fab fa-facebook-square"></i>
          <i className="sidebar-icon fab fa-twitter-square"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
          <i className="sidebar-icon fab fa-linkedin"></i>
          <i className="sidebar-icon fab fa-youtube-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
