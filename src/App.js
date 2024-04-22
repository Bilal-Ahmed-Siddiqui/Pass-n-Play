import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import PostDetails from "./components/PostDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import postsContext, { PostsState } from "./context/postsContext";

function App() {
  return (
    <PostsState>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Login" exact element={<Login />} />
          <Route path="/Signup" exact element={<Signup />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/PostDetails" exact element={<PostDetails />} />
          <Route path="*" exact element={<NotFound />} />
        </Routes>
      </Router>
    </PostsState>
  );
}

export default App;
