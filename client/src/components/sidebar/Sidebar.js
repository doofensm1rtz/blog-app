/* eslint-disable jsx-a11y/img-redundant-alt */
import "./sidebar.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const res = await axios.get("/categories");
    setCategories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

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
          {categories.map((category) => (
            <Link
              className="react-link"
              key={category._id}
              to={`/?cat=${category.name}`}
            >
              <li className="sidebar-list--item">{category.name}</li>
            </Link>
          ))}
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
