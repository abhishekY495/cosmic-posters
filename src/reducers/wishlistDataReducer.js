export const initState = {
  wishlist: [],
};

export const wishlistDataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST": {
      const poster = action.payload;
      return {
        ...state,
        wishlist: [...state.wishlist, poster],
      };
    }
    case "REMOVE_FROM_WISHLIST": {
      const id = action.payload;
      const newWishlistData = state.wishlist.filter((item) => item.id !== id);
      return {
        ...state,
        wishlist: newWishlistData,
      };
    }
    case "EMPTY_WISHLIST": {
      return {
        ...initState,
        wishlist: [],
      };
    }
    default:
      return state;
  }
};
