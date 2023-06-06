import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faker } from "@faker-js/faker";

import { CartContext } from "../../contexts/CartContext";
import { AddressContext } from "../../contexts/AddressContext";
import AddressFormModal from "../../components/Address/AddressFormModal/AddressFormModal";
import { PlacedOrderContext } from "../../contexts/PlacedOrderContext";
import "./Checkout.css";
import PlaceOrder from "../../components/PlaceOrder/PlaceOrder";

export default function Checkout() {
  const {
    state: { cart },
    dispatch: cartDispatch,
  } = useContext(CartContext);
  const {
    state: { addresses },
  } = useContext(AddressContext);
  const { dispatch: placedOrderDispatch } = useContext(PlacedOrderContext);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [disabledPlaceOrderBtn, setDisabledPlaceOrderBtn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeOrderModalOpen, setPlaceOrderModalOpen] = useState(false);
  const navigate = useNavigate();

  const total = cart
    .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
    .toFixed(2);

  const setDelieveryAddress = (address) => {
    setSelectedAddress(address);
    setDisabledPlaceOrderBtn(false);
  };

  const addAddressHandler = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const placeOrder = () => {
    const posters = cart;
    const orderId = faker.string.uuid();
    setPlaceOrderModalOpen(true);
    setTimeout(() => {
      placedOrderDispatch({
        type: "ADD_PLACED_ORDERS",
        payload: { orderId, posters },
      });
      cartDispatch({ type: "EMPTY_CART" });
      navigate("/profile");
    }, 5000);
  };

  return (
    <>
      {isModalOpen && <AddressFormModal onClose={closeModal} />}
      {placeOrderModalOpen && <PlaceOrder />}
      {cart.length === 0 ? (
        <p id="checkout-empty-message">Add Posters in Cart to Checkout...</p>
      ) : (
        <>
          <p id="checkout-heading">Checkout ({cart.length})</p>
          <div id="address-checkout-container">
            {addresses.length === 0 && (
              <button id="checkout-add-address" onClick={addAddressHandler}>
                Add Address to Place Order
              </button>
            )}
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
            <div id="checkout-total-container">
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
                <div id="total-container">
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
                addresses.length > 0 && (
                  <p id="select-address-message">Select an Address</p>
                )
              )}
              <button
                id={`place-order-btn${
                  disabledPlaceOrderBtn ? "-disabled" : ""
                }`}
                disabled={disabledPlaceOrderBtn}
                onClick={placeOrder}
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
