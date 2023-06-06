import React, { useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { toast } from "react-hot-toast";

import { AddressContext } from "../../../contexts/AddressContext";
import "./AddressFormModal.css";

export default function AddressFormModal({ address, onClose }) {
  const { dispatch } = useContext(AddressContext);
  const [name, setName] = useState(address ? address.name : "");
  const [street, setStreet] = useState(address ? address.street : "");
  const [city, setCity] = useState(address ? address.city : "");
  const [pincode, setPincode] = useState(address ? address.pincode : "");
  const [state, setState] = useState(address ? address.state : "");
  const [mobile, setMobile] = useState(address ? address.mobile : "");

  const saveAddressHandler = () => {
    if (address) {
      dispatch({
        type: "UPDATE_ADDRESS",
        payload: {
          ...address,
          name,
          mobile,
          street,
          pincode,
          city,
          state,
        },
      });
      toast.success("Address Updated");
    } else {
      const newAddress = {
        id: faker.string.uuid(),
        name,
        mobile,
        street,
        pincode,
        city,
        state,
      };
      dispatch({ type: "ADD_ADDRESS", payload: newAddress });
      toast.success("Address Added");
    }
    onClose();
  };

  const addDummyData = () => {
    setName(faker.person.fullName());
    setStreet(faker.location.streetAddress(true));
    setMobile(faker.phone.number("##########"));
    setCity(faker.location.city());
    setPincode(faker.location.zipCode("######"));
    setState(faker.location.state());
  };

  return (
    <div id="overlay" onClick={onClose}>
      <form
        id="address-form-modal"
        onSubmit={saveAddressHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <p id="address-form-modal-heading">
          {address ? "Edit Address" : "Add Address"}
        </p>
        <input
          required
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Mobile No."
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {!address && (
          <button id="dummy-data-btn" type="button" onClick={addDummyData}>
            Fill Dummy data
          </button>
        )}
        <div id="submit-cancel-btns">
          <button type="submit">{address ? "Save" : "Add"}</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
