import { createContext, useReducer } from "react";

import { addressDataReducer, initState } from "../reducers/addressDataReducer";

export const AddressContext = createContext();
export const AddressContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressDataReducer, initState);

  return (
    <AddressContext.Provider value={{ state, dispatch }}>
      {children}
    </AddressContext.Provider>
  );
};
