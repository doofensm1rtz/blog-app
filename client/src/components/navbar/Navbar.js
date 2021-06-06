/* eslint-disable jsx-a11y/img-redundant-alt */
import "./navbar.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Navbar = () => {
  const { user, dispatch } = useContext(Context);
  const public_path = "http://localhost:5000/images/";

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
          <li className="nav-list--item">
            <Link className="react-link" to="/">
              home
            </Link>
          </li>

          <li className="nav-list--item">
            <Link className="react-link" to="/create-post">
              write
            </Link>
          </li>
          {!user ? (
            <>
              <li className="nav-list--item">
                <Link className="react-link" to="/login">
                  login
                </Link>
              </li>
              <li className="nav-list--item">
                <Link className="react-link" to="/register">
                  register
                </Link>
              </li>{" "}
            </>
          ) : (
            <li
              className="nav-list--item"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              <Link className="react-link" to="/login">
                logout
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="nav-right">
        {user && (
          <Link to="/settings">
            <img
              className="nav-image"
              src={public_path + user.profileImage}
              alt=""
            ></img>
          </Link>
        )}
        <i className="nav-icon--search fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
