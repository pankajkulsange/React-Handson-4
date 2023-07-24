import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <button className="header-btn">
        <Link className="header-lnk" to="/">
          Home
        </Link>
      </button>
      <br />
      <br />
      <button className="header-btn">
        <Link className="header-lnk" to="/students">
          Students
        </Link>
      </button>
      <br />
      <br />
      <button className="header-btn">
        <Link className="header-lnk" to="/contact">
          Contact Us
        </Link>
      </button>
      <br />
      <br />
    </div>
  );
};

export default Header;
