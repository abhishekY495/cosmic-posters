import { createContext, useReducer } from "react";

import { initState, postersReducer } from "../reducers/postersDataReducer";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const categories = initState.postersData.reduce((acc, { category }) => {
    return acc.includes(category) ? acc : [...acc, category];
  }, []);

  const [state, dispatch] = useReducer(postersReducer, initState);

  const filteredPostersData = state.postersData.filter((poster) => {
    const searchedPosters = poster.name
      .toLowerCase()
      .includes(state.searchValue);
    const selectedCategoryPosters =
      state.selectedCategories.length === 0 ||
      state.selectedCategories.includes(poster.category);
    return searchedPosters && selectedCategoryPosters;
  });

  return (
    <DataContext.Provider
      value={{ filteredPostersData, categories, state, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};
