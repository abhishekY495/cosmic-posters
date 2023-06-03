export const initState = {
  addresses: [
    {
      id: "neil-arm-459",
      name: "Neil Armstrong",
      mobile: "9987352102",
      street: "459, Space Duplex, Road no.12, Shree Nagar",
      pincode: "506604",
      city: "Mumbai",
      state: "Maharashtra",
    },
  ],
};

export const addressDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS":
      return {
        addresses: [...state.addresses, action.payload],
      };
    case "UPDATE_ADDRESS":
      return {
        addresses: state.addresses.map((address) =>
          address.id === action.payload.id ? action.payload : address
        ),
      };
    case "DELETE_ADDRESS":
      return {
        addresses: state.addresses.filter(
          (address) => address.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
