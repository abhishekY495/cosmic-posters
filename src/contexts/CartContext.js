import { createContext, useReducer } from "react";

import { cartDataReducer, initState } from "../reducers/cartDataReducer";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartDataReducer, initState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
