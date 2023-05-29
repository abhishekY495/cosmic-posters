import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

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
    <div id="wishlist-posters">
      {wishlist.length === 0 && <p>Wishlist is Empty..</p>}
      {wishlist.map((poster) => {
        const { id, name, image, description, price, rating } = poster;
        return (
          <div key={id} className="wishlist-poster">
            <img src={image} alt={name} className="wishlist-poster-image" />
            <div className="wishlist-poster-info">
              <p>{name}</p>
              <div>
                <p>{price}</p>
                <p>{rating}</p>
              </div>
              <p>{description}</p>
              {cart.find((poster) => poster.id === id) ? (
                <button onClick={goToCartBtnHandler}>Go to Cart</button>
              ) : (
                <button onClick={() => addToCartBtnHandler(poster)}>
                  Add to Cart
                </button>
              )}
              <button onClick={() => removeFromWishlistBtnHandler(id)}>
                Remove from Wishlist
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
