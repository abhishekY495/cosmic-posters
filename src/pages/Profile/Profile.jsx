import React, { useContext, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { AddressContext } from "../../contexts/AddressContext";
import AddAddress from "../../components/Address/AddAddress";

import "./Profile.css";

export default function Profile() {
  const { user, logoutUser } = useContext(AuthContext);
  const {
    state: { addresses },
    dispatch,
  } = useContext(AddressContext);
  const [openAddAddress, setOpenAddAddress] = useState(false);

  const toggleAddAddressModal = () => setOpenAddAddress(!openAddAddress);

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
    <div id="profile">
      <p>{user && user.email}</p>
      <p>{user && user.displayName}</p>
      <button onClick={logoutBtnHandler}>Logout</button>
      <br />
      <button onClick={toggleAddAddressModal}>Add Address</button>
      <AddAddress
        openAddAddress={openAddAddress}
        setOpenAddAddress={setOpenAddAddress}
      />
      <br />
      {addresses.length > 0 &&
        addresses.map((address) => {
          return (
            <div key={address.id}>
              <p>{address.name}</p>
              <p>{address.mobile}</p>
              <p>{address.address}</p>
              <p>{address.pincode}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>
              <div>
                <button>Edit</button>
                <button onClick={() => deleteAddress(address.id)}>
                  Delete
                </button>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
