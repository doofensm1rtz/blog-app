import "./register.css";
import React from "react";

const Register = () => {
  return (
    <div className="register">
      <form className="register-form">
        <h1 className="register-title">Register</h1>
        <label htmlFor="register-email">Username</label>
        <input
          type="text"
          id="register-username"
          placeholder="Enter your username..."
        />
        <label htmlFor="register-email">Email</label>
        <input
          type="email"
          id="register-email"
          placeholder="Enter your email..."
        />
        <label htmlFor="register-password">Password</label>
        <input
          type="password"
          id="register-password"
          placeholder="Enter your password..."
        />
        <button className="register-btn">Register</button>
        <p>Already have an account? Login now!</p>
        <button className="login-btn">Login</button>
      </form>
    </div>
  );
};

export default Register;
