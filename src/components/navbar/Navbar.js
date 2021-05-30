/* eslint-disable jsx-a11y/img-redundant-alt */
import "./navbar.css";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-left">
        <i className="nav-icon fab fa-facebook-square"></i>
        <i className="nav-icon fab fa-twitter-square"></i>
        <i className="nav-icon fab fa-instagram-square"></i>
        <i className="nav-icon fab fa-linkedin"></i>
        <i className="nav-icon fab fa-youtube-square"></i>
      </div>
      <div className="nav-center">
        <ul className="nav-list">
          <li className="nav-list--item">home</li>
          <li className="nav-list--item">about</li>
          <li className="nav-list--item">write</li>
          <li className="nav-list--item">contact</li>
          <li className="nav-list--item">login</li>
        </ul>
      </div>
      <div className="nav-right">
        <img
          className="nav-image"
          src="images/profile/profile_img_1.jpg"
          alt="Profile image"
        ></img>
        <i className="nav-icon--search fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
