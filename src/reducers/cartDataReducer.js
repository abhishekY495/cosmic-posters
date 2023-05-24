export const initState = {
  cart: [],
};

export const cartDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const poster = action.payload;
      return {
        ...state,
        cart: [...state.cart, { ...poster, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART": {
      const id = action.payload;
      const newCartData = state.cart.filter((item) => item.id !== id);
      return {
        ...state,
        cart: newCartData,
      };
    }
    case "UPDATE_CART_QUANTITY": {
      const { value, poster } = action.payload;
      const newCartData = state.cart.map((item) =>
        item.id === poster.id
          ? {
              ...item,
              quantity:
                value === "increase"
                  ? poster.quantity < 5
                    ? poster.quantity + 1
                    : poster.quantity
                  : poster.quantity !== 1
                  ? poster.quantity - 1
                  : poster.quantity,
            }
          : item
      );
      return {
        ...state,
        cart: newCartData,
      };
    }
    default:
      return state;
  }
};
