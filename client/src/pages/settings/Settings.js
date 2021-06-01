import "./settings.css";
import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-titles">
          <span className="settings-update--title">Update Your Account</span>
          <span className="settings-delete--title">Delete Account</span>
        </div>
        <form className="settings-form">
          <label>Profile Photo</label>
          <div className="settings-pp">
            <img src="images/profile/profile_img_1.jpg" alt="profile" />
            <label htmlFor="file-input" title="Select image to upload">
              <i class="fas fa-camera"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="John" />
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings-btn">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
