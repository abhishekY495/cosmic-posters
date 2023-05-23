import React, { useContext, useState } from "react";

import { DataContext } from "../../contexts/DataContext";
import "./Filters.css";

export default function Filters() {
  const { categories, dispatch, state } = useContext(DataContext);
  const [priceRange, setPriceRange] = useState(500);

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
    setPriceRange(rangeValue);
    dispatch({ type: "FILTER_PRICE_RANGE", payload: rangeValue });
  };

  const ratingRadioHandler = (e) => {
    dispatch({
      type: "FILTER_RATING",
      payload: e.target.value,
    });
  };

  return (
    <div id="filters-group">
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
            onChange={priceRadioHandler}
          />
          High to Low
        </label>
        <label>
          <input
            type="radio"
            name="price"
            value="low-to-high"
            onChange={priceRadioHandler}
          />
          Low to High
        </label>
      </div>
      {/*  */}
      <div id="price-range">
        <label>
          <p>
            Price: <span>100</span> - <span>{priceRange}</span>{" "}
          </p>
          <input
            type="range"
            min={100}
            max={500}
            step={5}
            value={priceRange}
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
            onChange={ratingRadioHandler}
          />
          4 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="3"
            onChange={ratingRadioHandler}
          />
          3 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="2"
            onChange={ratingRadioHandler}
          />
          2 Stars & above
        </label>
        <label>
          <input
            type="radio"
            name="rating"
            value="1"
            onChange={ratingRadioHandler}
          />
          1 Stars & above
        </label>
      </div>
    </div>
  );
}
