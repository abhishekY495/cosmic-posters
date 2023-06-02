import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { DataContext } from "../../contexts/DataContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import { AuthContext } from "../../contexts/AuthContext";
import "./Poster.css";

export default function Poster() {
  const { postersData } = useContext(DataContext);
  const {
    state: { cart },
    dispatch: cartDispatch,
  } = useContext(CartContext);
  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useContext(WishlistContext);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const poster = postersData.find((poster) => poster.id === id);

  const addToCartBtnHandler = (poster) => {
    user
      ? cartDispatch({ type: "ADD_TO_CART", payload: poster })
      : navigate("/login");
  };
  const goToCartBtnHandler = () => navigate("/cart");

  const addToWishlistBtnHandler = () => {
    user
      ? wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: poster })
      : navigate("/login");
  };
  const removeFromWishlistBtnHandler = (id) => {
    user
      ? wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id })
      : navigate("/login");
  };

  return (
    <div id="poster">
      <div id="poster-image">
        <img src={poster?.image} alt={poster?.name} />
      </div>
      <div id="poster-info">
        <h2 id="poster-name">{poster?.name}</h2>
        <p id="poster-rating">
          <img
            className="star-icon"
            src="https://img.icons8.com/?size=22&id=8ggStxqyboK5&format=svg"
            alt="star"
          />
          {poster?.rating}
        </p>
        <p id="poster-price">₹{poster?.price}</p>
        {cart.find(({ id }) => id === poster.id) ? (
          <button
            className="poster-add-to-cart-btn poster-incart-btn"
            onClick={goToCartBtnHandler}
          >
            Go to Cart
          </button>
        ) : (
          <button
            className="poster-add-to-cart-btn"
            onClick={() => addToCartBtnHandler(poster)}
          >
            Add to Cart
          </button>
        )}
        <p id="poster-description">
          <span>Description: </span>
          {poster?.description}
        </p>
        {wishlist.find(({ id }) => id === poster.id) ? (
          <img
            id="poster-wishlist-icon"
            onClick={() => removeFromWishlistBtnHandler(id)}
            src="https://img.icons8.com/?size=22&id=V4c6yYlvXtzy&format=svg"
            alt="red-heart"
          />
        ) : (
          <img
            id="poster-wishlist-icon"
            onClick={() => addToWishlistBtnHandler(poster)}
            src="https://img.icons8.com/?size=22&id=4yauMM-kbvJ-&format=svg"
            alt="heart"
          />
        )}
      </div>
    </div>
  );
}
