import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(!click);

  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <h1>GLX TRVL</h1>
        </Link>
        <ul
          className={click ? "nav-menu active" : "nav-menu"}
          onClick={closeMenu}
        >
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="pricing">Pricing</Link>
          </li>
          <li className="nav-item">
            <Link to="training">Training</Link>
          </li>
          <li className="nav-item">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburguer" onClick={handleClick}>
          {click ? (
            <FaTimes style={{ color: "#ffff" }} size={30} />
          ) : (
            <FaBars style={{ color: "#ffff" }} size={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
