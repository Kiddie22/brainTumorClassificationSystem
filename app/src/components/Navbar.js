import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const Navbar = () => {
  return (
    <>
      {/* Navigation Bar */}

      <nav className="bg-dark sticky-top">
        <a className="logo" href="/">
          <img
            src="images/NeuroScan_icon.png"
            alt="NeuroScan Logo"
            style={{ width: "65px" }}
          />
        </a>

        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/"> HOME </Link>
          </li>

          <li>
            <Link to="/analyze"> ANALYZE MRI</Link>
          </li>

          <li>
            <Link to="/vision"> OUR VISION</Link>
          </li>

          <li>
            <Link to="/team"> ABOUT US</Link>
          </li>
        </ul>

        <SignUp />

        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
