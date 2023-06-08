import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { AuthContext } from "../../contexts/AuthContext";
import { DataContext } from "../../contexts/DataContext";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import Filters from "../../components/Filters/Filters";
import starIcon from "../../assets/poster/star.svg";
import emptyHeartIcon from "../../assets/poster/empty-heart.svg";
import redHeartIcon from "../../assets/poster/filled-heart.svg";
import filterIcon from "../../assets/filter-icon.svg";
import "./PostersListing.css";

export default function PostersListing() {
  const { state, postersData, dispatch } = useContext(DataContext);
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
  const [hideFilters, setHideFilters] = useState(false);
  const accountRequiredToast = () => {
    return toast("Account required", {
      style: { background: "#333", color: "#fff" },
      position: "top-center",
      icon: "🔐",
    });
  };

  const addToCartBtnHandler = (poster) => {
    if (user) {
      cartDispatch({ type: "ADD_TO_CART", payload: poster });
      toast.success("Added to Cart");
    } else {
      accountRequiredToast();
      navigate("/login");
    }
  };
  const goToCartBtnHandler = () => navigate("/cart");

  const addToWishlistBtnHandler = (poster) => {
    if (user) {
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: poster });
      toast.success("Added to Wishlist");
    } else {
      accountRequiredToast();
      navigate("/login");
    }
  };
  const removeFromWishlistBtnHandler = (id) => {
    if (user) {
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
      toast.error("Removed from Wishlist");
    } else {
      accountRequiredToast();
      navigate("/login");
    }
  };

  const toggleFilters = () => setHideFilters(!hideFilters);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "DATA_LOADED" });
    }, 2500);
  });

  return (
    <>
      <img
        onClick={toggleFilters}
        id="filter-toggle-btn"
        src={filterIcon}
        alt="filter"
      />
      <div id="posters-list-container">
        <Filters hideFilters={hideFilters} />
        <div id="posters-list">
          {postersData.length === 0 && (
            <div id="no-posters-container">
              <p>No Posters found</p>
              <LazyLoadImage
                id="no-posters-image"
                src="https://raw.githubusercontent.com/abhishekY495/asteroid-alert/main/assets/space-dog.webp"
                alt="dog floating in a spacecraft"
                effect="blur"
              />
            </div>
          )}
          {state.isLoading ? (
            <div id="loading-container">
              <p>Getting latest Posters</p>
              <LazyLoadImage
                id="loading-image"
                src="https://res.cloudinary.com/dfuirkjxj/image/upload/v1686062758/gifs/loop-galaxies_hsmhis.webp"
                alt="looping galaxies"
                effect="blur"
              />
            </div>
          ) : (
            postersData.map((poster) => {
              const { id, name, image, price, rating } = poster;
              return (
                <div className="poster" key={id}>
                  <Link to={`/poster/${id}`}>
                    <LazyLoadImage
                      src={image}
                      alt={name}
                      className="poster-image"
                    />
                  </Link>
                  <div className="poster-info">
                    <p className="poster-name">{name}</p>
                    <p className="poster-price">₹{price}</p>
                    <p className="poster-rating">
                      <img className="star-icon" src={starIcon} alt="star" />
                      {rating}
                    </p>
                    {cart.find((poster) => poster.id === id) ? (
                      <button
                        className="cart-btn incart-btn"
                        onClick={goToCartBtnHandler}
                      >
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
                        src={redHeartIcon}
                        alt="red-heart"
                      />
                    ) : (
                      <img
                        className="wishlist-icon"
                        onClick={() => addToWishlistBtnHandler(poster)}
                        src={emptyHeartIcon}
                        alt="heart"
                      />
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
