import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import Filters from "../../components/Filters/Filters";
import "./PostersListing.css";

export default function PostersListing() {
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
  const navigate = useNavigate();

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

  const addToWishlistBtnHandler = (poster) => {
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
    <>
      <div id="posters-list-container">
        <Filters />
        <div id="posters-list">
          {postersData.map((poster) => {
            const { id, name, image, price, rating } = poster;
            return (
              <div className="poster" key={id}>
                <Link to={`/poster/${id}`}>
                  <img className="poster-image" src={image} alt={name} />
                </Link>
                <p className="poster-name">{name}</p>
                <div className="price-rating">
                  <span>{price}</span>
                  <span>{rating}</span>
                </div>
                {cart.find((poster) => poster.id === id) ? (
                  <button onClick={() => removeFromCartBtnHandler(id)}>
                    Remove from Cart
                  </button>
                ) : (
                  <button onClick={() => addToCartBtnHandler(poster)}>
                    Add to Cart
                  </button>
                )}
                {wishlist.find((poster) => poster.id === id) ? (
                  <button onClick={() => removeFromWishlistBtnHandler(id)}>
                    Remove from Wishlist
                  </button>
                ) : (
                  <button onClick={() => addToWishlistBtnHandler(poster)}>
                    Add to Wishlist
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
