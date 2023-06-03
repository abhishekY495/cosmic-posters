import React, { useContext, useState } from "react";

import AddressFormModel from "../AddressFormModal/AddressFormModal";
import { AddressContext } from "../../../contexts/AddressContext";

export default function AddressListing({ checkout }) {
  const { state, dispatch } = useContext(AddressContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

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

  const handleAddAddress = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {isModalOpen && (
        <AddressFormModel address={selectedAddress} onClose={closeModal} />
      )}
      <div>
        <button onClick={handleAddAddress}>Add Address</button>
        {state.addresses.map((address) => {
          const { id, name, mobile, street, pincode, city, state } = address;
          return (
            <div key={id}>
              <p>Name - {name}</p>
              <p>Mobile - {mobile}</p>
              <p>Street - {street}</p>
              <p>Pincode - {pincode}</p>
              <p>City - {city}</p>
              <p>State - {state}</p>
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
          );
        })}
      </div>
    </>
  );
}
