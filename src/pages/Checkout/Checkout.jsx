import React, { useContext, useState } from "react";

import { CartContext } from "../../contexts/CartContext";
import { AddressContext } from "../../contexts/AddressContext";
import AddressListing from "../../components/Address/AddressListing/AddressListing";
import AddressFormModal from "../../components/Address/AddressFormModal/AddressFormModal";
import "./Checkout.css";

export default function Checkout() {
  const {
    state: { cart },
  } = useContext(CartContext);
  const {
    state: { addresses },
  } = useContext(AddressContext);
  const [openModal, setOpenModal] = useState(false);

  const total = cart
    .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
    .toFixed(2);

  const toggleAddressFormModal = () => setOpenModal(!openModal);

  return (
    <>
      <AddressFormModal openModal={openModal} setOpenModal={setOpenModal} />
      <div id="checkout">
        {addresses.length === 0 && <p>No Addresses found...</p>}
        <button onClick={toggleAddressFormModal}>Add Address</button>
        {addresses.map((address) => {
          return (
            <label key={address.id}>
              <input type="radio" name="address" />
              <AddressListing address={address} checkout />
            </label>
          );
        })}
        {cart.length === 0 && <p>No items to checkout...</p>}
        {cart.map((poster) => {
          return (
            <p key={poster.id}>
              {poster.name} - {poster.quantity}X
            </p>
          );
        })}
        {total > 0 && (
          <p>
            Total - <b>{total}</b>
          </p>
        )}
        <button>Place Order</button>
      </div>
    </>
  );
}
