import React, { useContext } from "react";
import { faker } from "@faker-js/faker";

import { states } from "../../data/stateData";
import { AddressContext } from "../../contexts/AddressContext";
import "./AddAddress.css";

export default function AddAddress({ openAddAddress, setOpenAddAddress }) {
  const { dispatch } = useContext(AddressContext);

  if (!openAddAddress) return null;

  const addAddressHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const address = Object.fromEntries(formData);
    dispatch({
      type: "ADD_ADDRESS",
      payload: { ...address, id: faker.string.uuid() },
    });
    setOpenAddAddress(false);
  };

  return (
    <form id="address-container" onSubmit={addAddressHandler}>
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
        <button onClick={() => setOpenAddAddress(false)}>Cancel</button>
      </div>
    </form>
  );
}
