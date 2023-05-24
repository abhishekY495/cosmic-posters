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
  const removeFromCartBtnHandler = (id) => {
    user
      ? cartDispatch({ type: "REMOVE_FROM_CART", payload: id })
      : navigate("/login");
  };

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
      <img id="poster-image" src={poster?.image} alt={poster?.name} />
      <div id="poster-info">
        <h2 id="poster-name">{poster?.name}</h2>
        <p id="poster-rating">{poster?.rating}</p>
        <p id="poster-price">₹{poster?.price}</p>
        <p id="poster-description">{poster?.description}</p>
        {cart.find(({ id }) => id === poster.id) ? (
          <button onClick={() => removeFromCartBtnHandler(poster.id)}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => addToCartBtnHandler(poster)}>
            Add to Cart
          </button>
        )}
        {wishlist.find(({ id }) => id === poster.id) ? (
          <button onClick={() => removeFromWishlistBtnHandler(poster.id)}>
            Remove from Wishlist
          </button>
        ) : (
          <button onClick={() => addToWishlistBtnHandler(poster)}>
            Add to Wishlist
          </button>
        )}
      </div>
    </div>
  );
}
