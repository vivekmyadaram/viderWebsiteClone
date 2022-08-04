// import "./App.css";
import { NavBar } from "./NavBar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
// import NavBarCss from "./NavBarCss.css";
import "./style.css";

function NavApp() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/blog" element={Blog} />
            <Route path="/contact" element={Contact} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default NavApp;
