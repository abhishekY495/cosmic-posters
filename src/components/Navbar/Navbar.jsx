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

  const cartCount = cart.length;
  const wishlistCount = wishlist.length;

  return (
    <nav>
      <div id="nav-home-search-group">
        <Link className="nav-links nav-home-link" to="/">
          <p>
            Cosmic{" "}
            <img
              id="poster-icon"
              src="https://cdn-icons-png.flaticon.com/64/1453/1453992.png"
              alt="poster"
            />
          </p>
        </Link>
        <SearchBar />
      </div>
      <div id="nav-links-group">
        <Link className="nav-links nav-explore-link" to="/posters-listing">
          Explore
        </Link>
        <Link className="nav-links nav-wishlist-link" to="wishlist">
          <img
            src="https://img.icons8.com/?size=22&id=59805&format=svg"
            alt="wishlist"
          />
          {wishlistCount > 0 && <sup>{wishlistCount}</sup>}
        </Link>
        <Link className="nav-links nav-cart-link" to="cart">
          <img
            src="https://img.icons8.com/?size=22&id=59997&format=svg"
            alt="cart"
          />
          {cartCount > 0 && <sup>{cartCount}</sup>}
        </Link>
        <Link className="nav-links nav-profile-link" to="profile">
          <img
            src="https://img.icons8.com/?size=22&id=84898&format=svg"
            alt="profile"
          />
        </Link>
      </div>
    </nav>
  );
}
