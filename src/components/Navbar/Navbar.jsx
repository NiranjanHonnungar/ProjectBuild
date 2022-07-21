import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
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
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu fontSize={27} style={{ color: 'var(--color-dark-blue)' }} onClick={() => { setToggleMenu(true) }} />


        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => { setToggleMenu(false) }} />
            <ul className="app__navbar-smallscreen-links ">
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
          </div>
        )}


      </div>
    </div>
  );
};

export default Navbar;
