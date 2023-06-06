export const initState = {
  placedOrders: [],
};

export const placedOrderDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PLACED_ORDERS": {
      const { orderId, posters } = action.payload;
      const totalAmount = posters.reduce((acc, {price, quantity}) => {
        return acc + price * quantity;
      }, 0);
      return {
        placedOrders: [
          ...state.placedOrders,
          { posters: [ ...posters ], orderId, totalAmount },
        ],
      };
    }
    default:
      return state;
  }
};
