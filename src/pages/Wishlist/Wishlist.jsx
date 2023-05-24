import React, { useContext } from "react";

import { WishlistContext } from "../../contexts/WishlistContext";
import "./Wishlist.css";

export default function Wishlist() {
  const {
    state: { wishlist },
    dispatch,
  } = useContext(WishlistContext);

  const removeFromWishlistBtnHandler = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  return (
    <div id="wishlist-posters">
      {wishlist.length === 0 && <p>Wishlist is Empty..</p> }
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
