import Navbar from "./components/navbar/Navbar";
import CreatePost from "./pages/createPost/CreatePost";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostPage from "./pages/post/PostPage";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <>
      <Navbar />
      <Login />
    </>
  );
}

export default App;
