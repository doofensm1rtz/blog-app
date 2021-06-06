import "./settings.css";
import React, { useContext, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
  const public_path = "http://localhost:5000/images/";

  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userID: user._id,
      username,
      email,
      password,
    };

    if (file) {
      const formData = new FormData();
      const filename = Date.now() + file.name;
      formData.append("name", filename);
      formData.append("file", file);
      updatedUser.profileImage = filename;
      axios
        .post("/upload", formData)
        .then()
        .catch((res) => console.log(res));
    }

    axios
      .put("/users/" + user._id, updatedUser)
      .then((res) => {
        setMessage(true);
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: "UPDATE_FAILURE" });
      });
  };

  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-titles">
          <span className="settings-update--title">Update Your Account</span>
          <span className="settings-delete--title">Delete Account</span>
        </div>
        <form className="settings-form" onSubmit={handleSubmit}>
          <label>Profile Photo</label>
          <div className="settings-pp">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : public_path + user.profileImage
              }
              alt="profile"
            />
            <label htmlFor="file-input" title="Select image to upload">
              <i className="fas fa-camera"></i>
            </label>
            <input
              type="file"
              id="file-input"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settings-btn" type="submit">
            Update
          </button>
        </form>
        {message && (
          <span className="update-message">Profile changed successfully!</span>
        )}
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
