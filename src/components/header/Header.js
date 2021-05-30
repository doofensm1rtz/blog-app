import "./header.css";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <div className="header-title--lg">Blog App</div>
        <div className="header-title--sm">Made with React & NodeJS</div>
        <img
          className="header-img"
          src="images/header/header_img_1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
