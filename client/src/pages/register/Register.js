import "./register.css";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    axios
      .post("/auth/register", {
        username,
        email,
        password,
      })
      .then((res) => {
        if (res.data) {
          window.location.replace("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit}>
        <h1 className="register-title">Register</h1>
        <label htmlFor="register-email">Username</label>
        <input
          type="text"
          id="register-username"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="register-email">Email</label>
        <input
          type="email"
          id="register-email"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="register-password">Password</label>
        <input
          type="password"
          id="register-password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-btn">Register</button>
        <p>Already have an account? Login now!</p>
        <button className="login-btn" type="submit">
          Login
        </button>
        {error && <span className="register-error">Something went wrong!</span>}
      </form>
    </div>
  );
};

export default Register;
