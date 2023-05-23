import { postersData } from "../data/postersData";

export const initState = {
  postersData,
  searchValue: "",
  selectedCategories: [],
  sortPrice: "",
  priceRange: 500,
  filterRating: null,
};

const initStateCopy = { ...initState };

export const postersReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_POSTER": {
      const searchValue = action.payload;
      return { ...state, searchValue };
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
    case "SORT_PRICE": {
      const sortPrice = action.payload;
      return {
        ...state,
        sortPrice,
      };
    }
    case "FILTER_PRICE_RANGE": {
      const priceRange = Number(action.payload);
      return {
        ...state,
        priceRange,
      };
    }
    case "FILTER_RATING": {
      const filterRating = Number(action.payload);
      return {
        ...state,
        filterRating,
      };
    }
    case "CLEAR_ALL_FILTERS": {
      return {
        ...initStateCopy,
      };
    }
    default:
      return state;
  }
};
