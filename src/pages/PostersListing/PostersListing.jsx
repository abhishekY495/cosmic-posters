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
  const goToCartBtnHandler = () => navigate("/cart");

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
                <div className="poster-info">
                  <p className="poster-name">{name}</p>
                  <p className="poster-price">₹{price}</p>
                  <p className="poster-rating">
                    <img
                      className="star-icon"
                      src="https://img.icons8.com/?size=22&id=8ggStxqyboK5&format=svg"
                      alt="star"
                    />
                    {rating}
                  </p>
                  {cart.find((poster) => poster.id === id) ? (
                    <button className="cart-btn incart-btn" onClick={goToCartBtnHandler}>
                      Go to Cart
                    </button>
                  ) : (
                    <button
                      className="cart-btn"
                      onClick={() => addToCartBtnHandler(poster)}
                    >
                      Add to Cart
                    </button>
                  )}
                  {wishlist.find((poster) => poster.id === id) ? (
                    <img
                      className="wishlist-icon"
                      onClick={() => removeFromWishlistBtnHandler(id)}
                      src="https://img.icons8.com/?size=22&id=V4c6yYlvXtzy&format=svg"
                      alt="red-heart"
                    />
                  ) : (
                    <img
                      className="wishlist-icon"
                      onClick={() => addToWishlistBtnHandler(poster)}
                      src="https://img.icons8.com/?size=22&id=4yauMM-kbvJ-&format=svg"
                      alt="heart"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
