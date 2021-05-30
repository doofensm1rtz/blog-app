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
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-wixmp-ed30a86b8c4ca887773594c2.wixmp.com%2Ff%2Fa4d93dda-09ac-40ea-9c93-b4834c994085%2Fd9y1lu2-4811a342-c965-4613-af8a-bf98f00cd618.png%2Fv1%2Ffill%2Fw_1195%2Ch_669%2Cq_70%2Cstrp%2Froronoa_zoro_wallpaper_by_plentoras_d9y1lu2-pre.jpg%3Ftoken%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODA2IiwicGF0aCI6IlwvZlwvYTRkOTNkZGEtMDlhYy00MGVhLTljOTMtYjQ4MzRjOTk0MDg1XC9kOXkxbHUyLTQ4MTFhMzQyLWM5NjUtNDYxMy1hZjhhLWJmOThmMDBjZDYxOC5wbmciLCJ3aWR0aCI6Ijw9MTQzOSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.wGEtf8kgu4F1FGzpE-5pWn2narHCKtnApCvhxw9_Z6Q&f=1&nofb=1"
          alt="Profile image"
        ></img>
        <i className="nav-icon--search fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
