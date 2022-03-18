import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="navbar-container">
      <div className="link-container">
        <div>
          <Link to={"/"} className="nav-item">
            Home
          </Link>
          <Link to={"/about"} className="nav-item">
            About
          </Link>
          <Link to={"/projects"} className="nav-item">
            Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
