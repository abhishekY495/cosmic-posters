import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";

import AddressFormModal from "../AddressFormModal/AddressFormModal";
import { AddressContext } from "../../../contexts/AddressContext";
import "./AddressListing.css";

export default function AddressListing({
  checkout,
  selectedAddress,
  setSelectedAddress,
}) {
  const { state, dispatch } = useContext(AddressContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideAddressListing, setHideAddressListing] = useState(true);
  const hideStyle = {
    display: hideAddressListing ? "none" : "block",
  };

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
    toast.error("Address Deleted");
  };

  return (
    <>
      {isModalOpen && (
        <AddressFormModal address={selectedAddress} onClose={closeModal} />
      )}
      <div id="addresses-container">
        <div
          id="addresses-container-heading"
          onClick={() => setHideAddressListing(!hideAddressListing)}
        >
          <span>{hideAddressListing ? "⏩" : "⏬"}</span>
          <p>Addresses ({state.addresses.length})</p>
        </div>
        {state.addresses.map((address) => {
          const { id, name, mobile, street, pincode, city, state } = address;
          return (
            <div key={id} className="address" style={hideStyle}>
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
