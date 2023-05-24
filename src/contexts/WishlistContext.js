import { createContext, useReducer } from "react";

import { wishlistDataReducer, initState } from "../reducers/wishlistDataReducer";

export const WishlistContext = createContext();
export const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistDataReducer, initState);

  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};
