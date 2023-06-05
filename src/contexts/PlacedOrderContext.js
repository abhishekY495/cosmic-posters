import { createContext, useReducer } from "react";

import {
  placedOrderDataReducer,
  initState,
} from "../reducers/placedOrderDataReducer";

export const PlacedOrderContext = createContext();
export const PlacedOrderContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(placedOrderDataReducer, initState);

  return (
    <PlacedOrderContext.Provider value={{ state, dispatch }}>
      {children}
    </PlacedOrderContext.Provider>
  );
};
