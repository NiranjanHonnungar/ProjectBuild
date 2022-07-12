import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestauarantMenu } from "react-icons/md";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="app-logo" />
        <p className="p__dancing"> The Sweet Sphere</p>
      </div>
      <ul className="app__navbar-links ">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Products</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Feedback</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          {" "}
          Log in / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          {" "}
          Cart
        </a>
      </div>
    </div>
  );
};

export default Navbar;
