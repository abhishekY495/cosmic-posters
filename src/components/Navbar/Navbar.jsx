import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import cartIcon from "../../assets/navbar/black-cart.svg";
import wishlistIcon from "../../assets/navbar/black-heart.svg";
import profileIcon from "../../assets/navbar/black-profile.svg";
import appIcon from "../../assets/app-icon.png";
import "./Navbar.css";

export default function Navbar() {
  const {
    state: { cart },
  } = useContext(CartContext);
  const {
    state: { wishlist },
  } = useContext(WishlistContext);

  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  return (
    <nav>
      <div id="nav-home-search-group">
        <Link className="nav-links nav-home-link" to="/">
          <div id="app-name">
            <p>Cosmic</p>
            <img id="poster-icon" src={appIcon} alt="poster" />
          </div>
        </Link>
        <SearchBar />
      </div>
      <div id="nav-links-group">
        <Link className="nav-links nav-explore-link" to="/posters-listing">
          Explore
        </Link>
        <Link className="nav-links nav-wishlist-link" to="wishlist">
          <img src={wishlistIcon} alt="wishlist" />
          {wishlistCount > 0 && <sup>{wishlistCount}</sup>}
        </Link>
        <Link className="nav-links nav-cart-link" to="cart">
          <img src={cartIcon} alt="cart" />
          {cartCount > 0 && <sup>{cartCount}</sup>}
        </Link>
        <Link className="nav-links nav-profile-link" to="profile">
          <img src={profileIcon} alt="profile" />
        </Link>
      </div>
    </nav>
  );
}
