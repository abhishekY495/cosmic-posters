import React, { useContext } from "react";
import { faker } from "@faker-js/faker";

import { states } from "../../../data/stateData";
import { AddressContext } from "../../../contexts/AddressContext";
import "./AddressFormModal.css";

export default function AddressFormModal({ openModal, setOpenModal }) {
  const { dispatch } = useContext(AddressContext);

  if (!openModal) return null;

  const addAddressHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const address = Object.fromEntries(formData);
    dispatch({
      type: "ADD_ADDRESS",
      payload: { ...address, id: faker.string.uuid() },
    });
    setOpenModal(false);
  };

  return (
    <div onClick={() => setOpenModal(false)} id="overlay">
      <form
        id="address-form-modal"
        onSubmit={addAddressHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="tel" name="mobile" placeholder="Mobile no." required />
        <input
          type="text"
          name="address"
          placeholder="Room no, Area, Colony"
          required
        />
        <input type="number" name="pincode" placeholder="Pincode" required />
        <input type="text" name="city" placeholder="City" required />
        <select name="state">
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        <div>
          <button type="submit">Save</button>
          <button onClick={() => setOpenModal(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
