import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { DataContext } from "../../contexts/DataContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import { AuthContext } from "../../contexts/AuthContext";
import starIcon from "../../assets/poster/star.svg";
import emptyHeartIcon from "../../assets/poster/empty-heart.svg";
import redHeartIcon from "../../assets/poster/filled-heart.svg";
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
    if (user) {
      cartDispatch({ type: "ADD_TO_CART", payload: poster });
      toast.success("Added to Cart");
    } else {
      navigate("/login");
    }
  };
  const goToCartBtnHandler = () => navigate("/cart");

  const addToWishlistBtnHandler = () => {
    if (user) {
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: poster });
      toast.success("Added to Wishlist");
    } else {
      navigate("/login");
    }
  };
  const removeFromWishlistBtnHandler = (id) => {
    if (user) {
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
      toast.error("Removed from Wishlist");
    } else {
      navigate("/login");
    }
  };

  return (
    <div id="poster">
      <div id="poster-image">
        <img src={poster?.image} alt={poster?.name} />
      </div>
      <div id="poster-info">
        <h2 id="poster-name">{poster?.name}</h2>
        <p id="poster-rating">
          <img className="star-icon" src={starIcon} alt="star" />
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
            src={redHeartIcon}
            alt="red-heart"
          />
        ) : (
          <img
            id="poster-wishlist-icon"
            onClick={() => addToWishlistBtnHandler(poster)}
            src={emptyHeartIcon}
            alt="heart"
          />
        )}
      </div>
    </div>
  );
}
