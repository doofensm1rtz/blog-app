import "./login.css";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    axios
      .post("/auth/login", {
        username,
        password,
      })
      .then((res) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      })
      .catch((res) => {
        dispatch({ type: "LOGIN_FAILURE" });
      });
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <label htmlFor="login-username">Username</label>
        <input
          type="text"
          id="login-username"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" type="submit">
          Login
        </button>
        <p>Don't have an account? Register now!</p>
        <button className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default Login;
