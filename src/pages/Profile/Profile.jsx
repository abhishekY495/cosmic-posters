import React, { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { AddressContext } from "../../contexts/AddressContext";
import AddressFormModal from "../../components/Address/AddressFormModal/AddressFormModal";
import AddressListing from "../../components/Address/AddressListing/AddressListing";
import "./Profile.css";

export default function Profile() {
  const { user, logoutUser } = useContext(AuthContext);
  const {
    state: { addresses },
    dispatch,
  } = useContext(AddressContext);
  const [openModal, setOpenModal] = useState(false);

  const toggleAddressFormModal = () => setOpenModal(!openModal);

  const logoutBtnHandler = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAddress = (id) => {
    dispatch({
      type: "DELETE_ADDRESS",
      payload: id,
    });
  };

  return (
    <>
      <AddressFormModal openModal={openModal} setOpenModal={setOpenModal} />
      <div id="profile">
        <p>{user && user.email}</p>
        <p>{user && user.displayName}</p>
        <button onClick={logoutBtnHandler}>Logout</button>
        <br />
        <button onClick={toggleAddressFormModal}>Add Address</button>
        <br />
        {addresses.length > 0 &&
          addresses.map((address) => {
            return (
              <AddressListing
                key={address.id}
                address={address}
                deleteAddress={deleteAddress}
              />
            );
          })}
      </div>
    </>
  );
}
