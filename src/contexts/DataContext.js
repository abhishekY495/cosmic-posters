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
    const filterByPriceRange =
      poster.price >= 100 && poster.price <= state.priceRange;
    const filterByRating = poster.rating > state.filterRating;
    return (
      searchedPosters &&
      selectedCategoryPosters &&
      filterByPriceRange &&
      filterByRating
    );
  });

  const sortedPostersData = filteredPostersData.sort((a, b) => {
    if (state.sortPrice === "high-to-low") {
      return b.price - a.price;
    } else if (state.sortPrice === "low-to-high") {
      return a.price - b.price;
    }
  });

  return (
    <DataContext.Provider
      value={{ postersData: sortedPostersData, categories, state, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};
