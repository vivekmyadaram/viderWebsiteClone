import React, { useState } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/material";
import viderLogo from "../images/viderLogo.png";
const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <Container>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#banner" className="nav-logo">
            <img
              src={viderLogo}
              alt="viderLogo"
              style={{ width: "180px", height: "60px" }}
            />
          </a>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#visionMission"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                VisionMission
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#benefits"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                features
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#footer"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact us
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <MenuIcon className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default NavBar;
