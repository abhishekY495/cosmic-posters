export const initState = {
  placedOrders: [],
};

export const placedOrderDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLACED_ORDERS": {
      const { orderId, posters } = action.payload;
      return {
        placedOrders: [
          ...state.placedOrders,
          { posters: [ ...posters ], orderId },
        ],
      };
    }
    default:
      return state;
  }
};
