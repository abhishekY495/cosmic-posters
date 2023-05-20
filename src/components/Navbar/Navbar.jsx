import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <Link className="nav-links" to="/">Cosmic 🖼️</Link>
      <input id="navbar-search" type="text" placeholder="Search"/>
      <Link className="nav-links" to="/posters-listing">Explore</Link>
      <Link className="nav-links" to="wishlist">Wishlist</Link>
      <Link className="nav-links" to="cart">Cart</Link>
      <Link className="nav-links" to="profile">Profile</Link>
    </nav>
  );
}
