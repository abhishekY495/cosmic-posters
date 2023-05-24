import React, { useContext } from "react";

import { CartContext } from "../../contexts/CartContext";
import "./Cart.css";

export default function Cart() {
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  const total = cart.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );

  const cartQuantityHandler = (e, poster) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_CART_QUANTITY", payload: { value, poster } });
  };

  const removeFromCartBtnHandler = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div id="cart-posters">
      {cart.length === 0 && <p>Cart is Empty...</p> }
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
      {total > 0 && (
        <p>
          Total - <b>{total.toFixed(2)}</b>
        </p>
      )}
    </div>
  );
}
