import { postersData } from "../data/postersData";

export const initState = {
  postersData,
  searchValue: "",
  selectedCategories: [],
};

export const postersDataReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_POSTER": {
      return { ...state, searchValue: action.payload };
    }
    case "": {
      break;
    }
    default:
      return state;
  }
};
