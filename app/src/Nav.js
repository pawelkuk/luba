import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <Link to="/">
        <h3 className="link">Logo</h3>
      </Link>
      <ul className="nav-links">
        <Link to="/about">
          <li className="link">About</li>
        </Link>
        <Link to="/shop">
          <li className="link">Shop</li>
        </Link>
        <Link to="/contact">
          <li className="link">Contact</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;