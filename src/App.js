import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Singup from "./components/Singup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Login" exact element={<Login />} />
        <Route path="/Signup" exact element={<Singup />} />
        <Route path="/About" exact element={<About />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
