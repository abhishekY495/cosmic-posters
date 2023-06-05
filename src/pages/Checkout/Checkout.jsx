import React, { useContext, useState } from "react";

import { CartContext } from "../../contexts/CartContext";
import { AddressContext } from "../../contexts/AddressContext";
import "./Checkout.css";

export default function Checkout() {
  const {
    state: { cart },
  } = useContext(CartContext);
  const {
    state: { addresses },
  } = useContext(AddressContext);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [disabledPlaceOrderBtn, setDisabledPlaceOrderBtn] = useState(true);

  const total = cart
    .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
    .toFixed(2);

  const setDelieveryAddress = (address) => {
    setSelectedAddress(address);
    setDisabledPlaceOrderBtn(false);
  };

  return (
    <>
      {cart.length === 0 ? (
        <p id="checkout-empty-message">No items to checkout...</p>
      ) : (
        <>
          <p id="checkout-heading">Checkout ({cart.length})</p>
          <div id="address-checkout-container">
            <div id="address-container">
              {addresses.map((address) => {
                const { id, name, street, city, pincode, state, mobile } =
                  address;
                return (
                  <label key={id} className="single-address">
                    <input
                      type="radio"
                      name="address"
                      onChange={() => setDelieveryAddress(address)}
                    />
                    <div>
                      <p className="address-name">{name}</p>
                      <p className="address-street">{street}</p>
                      <p className="address-city-pincode">
                        {city}, {pincode}
                      </p>
                      <p className="address-state">{state}</p>
                      <p className="address-mobile">Mobile: {mobile}</p>
                    </div>
                  </label>
                );
              })}
            </div>
            <div id="checkout-container">
              <div>
                {cart.map((poster) => {
                  return (
                    <div key={poster.id} className="checkout-container-posters">
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
                <div id="checkout-total-container">
                  <div id="delivery-charge">
                    <p>Delivery charge</p>
                    <p>Free</p>
                  </div>
                  <div id="checkout-total-price">
                    <p id="heading">Total</p>
                    <p id="price">
                      ₹<b>{total}</b>
                    </p>
                  </div>
                </div>
              )}
              {selectedAddress.name ? (
                <div id="delivery-address">
                  <p className="address-name">{selectedAddress.name}</p>
                  <p className="address-street">{selectedAddress.street}</p>
                  <p className="address-city-pincode">
                    {selectedAddress.city}, {selectedAddress.pincode}
                  </p>
                  <p className="address-state">{selectedAddress.state}</p>
                  <p className="address-mobile">
                    Mobile: {selectedAddress.mobile}
                  </p>
                </div>
              ) : (
                <p id="select-address-message">Select an Address</p>
              )}
              <button
                id={`place-order-btn${
                  disabledPlaceOrderBtn ? "-disabled" : ""
                }`}
                disabled={disabledPlaceOrderBtn}
                onClick={() => console.log("Order placed")}
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
