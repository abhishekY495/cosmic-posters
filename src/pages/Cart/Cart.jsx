import React, { useContext } from "react";

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
    dispatch({ type: "UPDATE_CART_QUANTITY", payload: { value, poster } });
  };

  const removeFromCartBtnHandler = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div id="cart-checkout-container">
      <div id="cart-posters">
        {cart.length === 0 && <p>Cart is Empty...</p>}
        {cart.map((poster) => {
          const { id, name, price, quantity } = poster;
          return (
            <div key={id} className="cart-poster">
              <div className="cart-name-price">
                <p>{name}</p>
                <p>₹{price}</p>
              </div>
              <div className="cart-btn-group">
                <button
                  onClick={(e) => cartQuantityHandler(e, poster)}
                  value="decrease"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={(e) => cartQuantityHandler(e, poster)}
                  value="increase"
                >
                  +
                </button>
              </div>
              <button onClick={() => removeFromCartBtnHandler(id)}>
                Remove From Cart
              </button>
            </div>
          );
        })}
      </div>
      <div id="checkout-container">
        <div id="chekout-posters">
          {cart.map((poster) => {
            return (
              <p key={poster.id}>
                {poster.name} - {poster.quantity}X
              </p>
            );
          })}
        </div>
        {total > 0 && (
          <p>
            Total - <b>{total}</b>
          </p>
        )}
        {cart.length > 0 && (
          <Link to="/checkout">
            <p id="checkout-link">Checkout</p>
          </Link>
        )}
      </div>
    </div>
  );
}
