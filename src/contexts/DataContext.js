import { createContext, useReducer } from "react";

import { postersData } from "../data/postersData";
import { initState, postersDataReducer } from "../reducers/postersDataReducer";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const categories = postersData.reduce((acc, { category }) => {
    return acc.includes(category) ? acc : [...acc, category];
  }, []);

  const [state, dispatch] = useReducer(postersDataReducer, initState);

  const filteredPostersData = postersData.filter((poster) => {
    const searchedPosters = poster.name
      .toLowerCase()
      .includes(state.searchValue);
    return searchedPosters;
  });

  return (
    <DataContext.Provider
      value={{ filteredPostersData, categories, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};
