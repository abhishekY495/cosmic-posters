import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import AddressListing from "../../components/Address/AddressListing/AddressListing";
import "./Profile.css";

export default function Profile() {
  const { user, logoutUser } = useContext(AuthContext);

  const logoutBtnHandler = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="profile">
        <p>{user && user.displayName}</p>
        <p>{user && user.email}</p>
        <button onClick={logoutBtnHandler}>Logout</button>
      </div>
      <AddressListing />
    </>
  );
}
