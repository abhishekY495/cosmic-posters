import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import "./Navbar.css";

export default function Navbar() {
  const {
    state: { cart },
  } = useContext(CartContext);
  const {
    state: { wishlist },
  } = useContext(WishlistContext);

  return (
    <nav>
      <Link className="nav-links" to="/">
        Cosmic 🖼️
      </Link>
      <SearchBar />
      <Link className="nav-links" to="/posters-listing">
        Explore
      </Link>
      <Link className="nav-links" to="wishlist">
        Wishlist <sup>{wishlist.length}</sup>
      </Link>
      <Link className="nav-links" to="cart">
        Cart <sup>{cart.length}</sup>
      </Link>
      <Link className="nav-links" to="profile">
        Profile
      </Link>
    </nav>
  );
}
