import React, { useContext } from "react";

import { DataContext } from "../../contexts/DataContext";
import "./Filters.css";

export default function Filters() {
  const { categories, dispatch, state } = useContext(DataContext);

  const checkboxHandler = (e) => {
    dispatch({
      type: "SELECT_CATEGORY",
      payload: e.target.value,
    });
  };

  const priceRadioHandler = (e) => {
    dispatch({
      type: "SORT_PRICE",
      payload: e.target.value,
    });
  };

  const priceRangeHandler = (e) => {
    const rangeValue = e.target.value;
    dispatch({ type: "FILTER_PRICE_RANGE", payload: rangeValue });
  };

  const ratingRadioHandler = (e) => {
    dispatch({
      type: "FILTER_RATING",
      payload: e.target.value,
    });
  };

  const clearFiltersBtnHandler = () => {
    console.log(state);
    dispatch({ type: "CLEAR_ALL_FILTERS" });
  };

  return (
    <div id="filters-group">
      <div id="filters-heading">
        <p>Filters</p>
        <button onClick={clearFiltersBtnHandler}>Clear All</button>
      </div>
      <div id="categories-checkbox">
        {categories.map((category) => {
          return (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={state.selectedCategories.includes(category)}
                onChange={checkboxHandler}
              />
              {category}
            </label>
          );
        })}
      </div>
      {/*  */}
      <div id="price-radio">
        <label>
          <input
            type="radio"
            name="price"
            value="high-to-low"
            checked={state.sortPrice === "high-to-low" && true}
            onChange={priceRadioHandler}
          />
          High to Low
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="low-to-high"
            checked={state.sortPrice === "low-to-high" && true}
            onChange={priceRadioHandler}
          />
          Low to High
        </label>
      </div>
      {/*  */}
      <div id="price-range">
        <label>
          <p>
            Price: <span>100</span> - <span>{state.priceRange}</span>{" "}
          </p>
          <input
            type="range"
            min={100}
            max={500}
            step={5}
            value={state.priceRange}
            onChange={priceRangeHandler}
          />
        </label>
      </div>
      {/*  */}
      <div id="rating-radio">
        <label>
          <input
            type="radio"
            name="rating"
            value="4"
            checked={state.filterRating === 4 ? true : false}
            onChange={ratingRadioHandler}
          />
          4 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="3"
            checked={state.filterRating === 3 && true}
            onChange={ratingRadioHandler}
          />
          3 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="2"
            checked={state.filterRating === 2 && true}
            onChange={ratingRadioHandler}
          />
          2 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="1"
            checked={state.filterRating === 1 && true}
            onChange={ratingRadioHandler}
          />
          1 Stars & above
        </label>
      </div>
    </div>
  );
}
