import "./login.css";
import React from "react";

const Login = () => {
  return (
    <div className="login">
      <form className="login-form">
        <h1 className="login-title">Login</h1>
        <label htmlFor="login-email">Email</label>
        <input
          type="email"
          id="login-email"
          placeholder="Enter your email..."
        />
        <label htmlFor="login-password">Password</label>
        <input
          type="password"
          id="login-password"
          placeholder="Enter your password..."
        />
        <button className="login-btn">Login</button>
        <p>Don't have an account? Register now!</p>
        <button className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default Login;
