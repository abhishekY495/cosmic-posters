import React from "react";

export default function AddressListing({ address, deleteAddress, checkout }) {
  return (
    <div key={address.id}>
      <p>{address.name}</p>
      <p>{address.phone}</p>
      <p>{address.address}</p>
      <p>{address.pincode}</p>
      <p>{address.city}</p>
      <p>{address.state}</p>
      {checkout ? null : (
        <div>
          <button>Edit</button>
          <button onClick={() => deleteAddress(address.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}
