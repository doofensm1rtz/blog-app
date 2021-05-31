import "./postPage.css";
import Sidebar from "../../components/sidebar/Sidebar";
import PostDetail from "../../components/postDetail/PostDetail";
import React from "react";

const PostPage = () => {
  return (
    <div className="post-page">
      <PostDetail />
      <Sidebar />
    </div>
  );
};

export default PostPage;
