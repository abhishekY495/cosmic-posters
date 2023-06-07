import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import AddressListing from "../../components/Address/AddressListing/AddressListing";
import AddressFormModal from "../../components/Address/AddressFormModal/AddressFormModal";
import PlacedOrderListing from "../../components/PlacedOrderListing/PlacedOrderListing";
import { CartContext } from "../../contexts/CartContext";
import { WishlistContext } from "../../contexts/WishlistContext";
import "./Profile.css";

export default function Profile() {
  const { user, logoutUser } = useContext(AuthContext);
  const { dispatch: cartDispatch } = useContext(CartContext);
  const { dispatch: wishlistDispatch } = useContext(WishlistContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();

  const logoutBtnHandler = async () => {
    try {
      await toast.promise(logoutUser(), {
        loading: "Logging you Out",
        success: <b>Logged Out</b>,
        error: <b>Something went wrong</b>,
      });
      wishlistDispatch({ type: "EMPTY_WISHLIST" });
      cartDispatch({ type: "EMPTY_CART" });
      navigate("/posters-listing");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleAddAddress = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAddress(null);
  };

  return (
    <>
      {isModalOpen && (
        <AddressFormModal address={selectedAddress} onClose={closeModal} />
      )}
      <div id="profile">
        <p id="heading">Profile</p>
        <p id="profile-name">
          <span>Name: </span>
          {user && user.displayName}
        </p>
        <p id="profile-email">
          <span>Email: </span>
          {user && user.email}
        </p>
        <div id="settings-btn-container">
          <button id="add-address-btn" onClick={handleAddAddress}>
            Add Address
          </button>
          <button id="logout-btn" onClick={logoutBtnHandler}>
            Logout
          </button>
        </div>
      </div>
      <div id="address-profile-listing">
        <AddressListing
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />
        <PlacedOrderListing />
      </div>
    </>
  );
}
