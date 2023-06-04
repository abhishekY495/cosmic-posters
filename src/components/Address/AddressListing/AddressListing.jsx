import React, { useContext } from "react";

import AddressFormModal from "../AddressFormModal/AddressFormModal";
import { AddressContext } from "../../../contexts/AddressContext";
import "./AddressListing.css";

export default function AddressListing({
  checkout,
  isModalOpen,
  setIsModalOpen,
  selectedAddress,
  setSelectedAddress,
}) {
  const { state, dispatch } = useContext(AddressContext);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAddress(null);
  };

  const updateAddressHandler = (address) => {
    setIsModalOpen(true);
    setSelectedAddress(address);
  };

  const deleteAddressHandler = (id) => {
    dispatch({ type: "DELETE_ADDRESS", payload: id });
  };

  return (
    <>
      {isModalOpen && (
        <AddressFormModal address={selectedAddress} onClose={closeModal} />
      )}
      <div id="addresses-container">
        <p id="addresses-container-heading">
          Your Addresses{" "}
          <span id="address-count">({state.addresses.length})</span>
        </p>
        {state.addresses.map((address) => {
          const { id, name, mobile, street, pincode, city, state } = address;
          return (
            <div key={id} className="address">
              <p className="name">{name}</p>
              <p className="street">{street}</p>
              <p className="city-pincode">
                {city}, {pincode}
              </p>
              <p className="state">{state}</p>
              <p className="mobile">Mobile: {mobile}</p>
              <div className="btn-container">
                {!checkout && (
                  <>
                    <button onClick={() => updateAddressHandler(address)}>
                      Edit
                    </button>
                    <button onClick={() => deleteAddressHandler(id)}>
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
