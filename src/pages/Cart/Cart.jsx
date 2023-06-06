import React, { useContext } from "react";
import { toast } from "react-hot-toast";

import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const total = cart
    .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
    .toFixed(2);

  const cartQuantityHandler = (e, poster) => {
    const value = e.target.value;
    if (value === "decrease") {
      if (poster.quantity === 1) {
        toast.error("Cannot be less than 1.");
      } else {
        dispatch({ type: "UPDATE_CART_QUANTITY", payload: { value, poster } });
        toast.success(`-1 ${poster.name}`);
      }
    } else if (value === "increase") {
      if (poster.quantity === 5) {
        toast.error("Max quantity reached.");
      } else {
        dispatch({ type: "UPDATE_CART_QUANTITY", payload: { value, poster } });
        toast.success(`+1 ${poster.name}`);
      }
    }
  };

  const removeFromCartBtnHandler = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
    toast.error("Removed from Cart");
  };

  return (
    <>
      {cart.length === 0 ? (
        <p className="cart-message-1">Cart is Empty...</p>
      ) : (
        <p className="cart-message-2">
          {cart.length > 1 ? `${cart.length} Posters` : `${cart.length} Poster`}
        </p>
      )}
      {cart.length > 0 && (
        <div id="cart-checkout-container">
          <div id="cart-posters-container">
            {cart.map((poster) => {
              const { id, image, name, price, quantity } = poster;
              return (
                <div key={id} className="cart-poster">
                  <Link
                    className="cart-poster-image-container"
                    to={`/poster/${id}`}
                  >
                    <img src={image} className="cart-poster-image" alt={name} />
                  </Link>
                  <div className="cart-poster-info">
                    <Link to={`/poster/${id}`}>
                      <p className="cart-poster-name">{name}</p>
                    </Link>
                    <p className="cart-poster-price">₹{price}</p>
                    <div className="quantity-btn-group">
                      <button
                        className="decrease-btn"
                        onClick={(e) => cartQuantityHandler(e, poster)}
                        value="decrease"
                      >
                        -
                      </button>
                      <p>{quantity}</p>
                      <button
                        className="increase-btn"
                        onClick={(e) => cartQuantityHandler(e, poster)}
                        value="increase"
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="remove-cart-btn"
                      onClick={() => removeFromCartBtnHandler(id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div id="checkout-container">
            <div>
              {cart.map((poster) => {
                return (
                  <div key={poster.id} className="checkout-posters">
                    <p className="name-quantity">
                      {poster.name} ({poster.quantity})
                    </p>
                    <p className="price-quantity">
                      {(poster.quantity * poster.price).toFixed(2)}
                    </p>
                  </div>
                );
              })}
            </div>
            {total > 0 && (
              <div id="total-price">
                <p id="heading">Total</p>
                <p id="price">
                  ₹<b>{total}</b>
                </p>
              </div>
            )}
            {cart.length > 0 && (
              <Link to="/checkout">
                <p id="checkout-link">Checkout</p>
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
