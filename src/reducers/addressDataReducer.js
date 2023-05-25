export const initState = {
  addresses: [],
};

export const addressDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ADDRESS": {
      const address = action.payload;
      return { ...state, addresses: [...state.addresses, address] };
    }
    case "DELETE_ADDRESS": {
      const id = action.payload;
      return {
        ...state,
        addresses: state.addresses.filter((address) => address.id !== id),
      };
    }
    default:
      return state;
  }
};
