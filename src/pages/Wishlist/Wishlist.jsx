import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { WishlistContext } from "../../contexts/WishlistContext";
import { CartContext } from "../../contexts/CartContext";
import "./Wishlist.css";

export default function Wishlist() {
  const {
    state: { wishlist },
    dispatch: wishlistDispatch,
  } = useContext(WishlistContext);
  const {
    state: { cart },
    dispatch: cartDispatch,
  } = useContext(CartContext);
  const navigate = useNavigate();

  const removeFromWishlistBtnHandler = (id) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  const addToCartBtnHandler = (poster) => {
    cartDispatch({ type: "ADD_TO_CART", payload: poster });
  };
  const goToCartBtnHandler = () => navigate("/cart");

  return (
    <>
      {wishlist.length === 0 ? (
        <p className="wishlist-message-1">Wishlist is Empty...</p>
      ) : (
        <p className="wishlist-message-2">
          {wishlist.length > 1
            ? `${wishlist.length} Posters`
            : `${wishlist.length} Poster`}
        </p>
      )}
      <div
        className={
          wishlist.length === 1
            ? "wishlist-posters-1"
            : wishlist.length === 2
            ? "wishlist-posters-2"
            : "wishlist-posters-all"
        }
      >
        {wishlist.map((poster) => {
          const { id, name, image, price, rating } = poster;
          return (
            <div key={id} className="wishlist-poster-container">
              <div className="wishlist-poster-image">
                <Link to={`/poster/${id}`}>
                  <img src={image} alt={name} />
                </Link>
              </div>
              <div className="wishlist-poster-info">
                <p className="wishlist-poster-name">{name}</p>
                <p className="wishlist-poster-price">₹{price}</p>
                <p className="wishlist-poster-rating">
                  <img
                    className="star-icon"
                    src="https://img.icons8.com/?size=22&id=8ggStxqyboK5&format=svg"
                    alt="star"
                  />
                  {rating}
                </p>
                <img
                  className="wishlist-poster-icon"
                  onClick={() => removeFromWishlistBtnHandler(id)}
                  src="https://img.icons8.com/?size=22&id=V4c6yYlvXtzy&format=svg"
                  alt="red-heart"
                />
                {cart.find((poster) => poster.id === id) ? (
                  <button
                    className="wishlist-poster-add-to-cart-btn wishlist-poster-incart-btn"
                    onClick={goToCartBtnHandler}
                  >
                    Go to Cart
                  </button>
                ) : (
                  <button
                    className="wishlist-poster-add-to-cart-btn"
                    onClick={() => addToCartBtnHandler(poster)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
