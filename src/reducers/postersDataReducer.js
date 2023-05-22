import { postersData } from "../data/postersData";

export const initState = {
  postersData,
  searchValue: "",
  selectedCategories: [],
};

export const postersReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_POSTER": {
      return { ...state, searchValue: action.payload };
    }
    case "SELECT_CATEGORY": {
      const selectedCategory = action.payload;
      return state.selectedCategories.includes(selectedCategory)
        ? {
            ...state,
            selectedCategories: state.selectedCategories.filter(
              (category) => category !== selectedCategory
            ),
          }
        : {
            ...state,
            selectedCategories: [...state.selectedCategories, selectedCategory],
          };
    }
    default:
      return state;
  }
};
