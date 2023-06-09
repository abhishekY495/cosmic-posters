import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataContext } from "../../contexts/DataContext";
import "./SearchBar.css";

export default function SearchBar() {
  const {
    state: { searchValue },
    dispatch,
  } = useContext(DataContext);
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    dispatch({ type: "SEARCH_POSTER", payload: e.target.value });
    navigate("/posters-listing");
  };

  return (
    <input
      id="navbar-search"
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={onChangeHandler}
    />
  );
}
