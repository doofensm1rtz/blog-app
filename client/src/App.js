import Navbar from "./components/navbar/Navbar";
import CreatePost from "./pages/createPost/CreatePost";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PostPage from "./pages/post/PostPage";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create-post">
          {isUserLoggedIn ? <CreatePost /> : <Home />}
        </Route>
        <Route path="/settings">
          {isUserLoggedIn ? <Settings /> : <Home />}
        </Route>
        <Route path="/post/:id">
          <PostPage />
        </Route>
        <Route path="/login">{isUserLoggedIn ? <Home /> : <Login />}</Route>
        <Route path="/register">
          {isUserLoggedIn ? <Home /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
