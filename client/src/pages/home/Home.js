import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  const getPosts = async () => {
    const res = await axios.get("/posts" + search);
    setPosts(res.data);
  };

  useEffect(() => {
    getPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;
