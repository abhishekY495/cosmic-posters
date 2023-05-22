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
          <input type="radio" name="price" />
          Low to High
        </label>
        <label>
          <input type="radio" name="price" />
          High to Low
        </label>
      </div>
      {/*  */}
      <div id="price-range">
        <label>
          Price: <input type="range" />
        </label>
      </div>
      {/*  */}
      <div id="rating-radio">
        <label>
          <input type="radio" name="rating" />1 Stars & above
        </label>
        <label>
          <input type="radio" name="rating" />2 Stars & above
        </label>
        <label>
          <input type="radio" name="rating" />3 Stars & above
        </label>
        <label>
          <input type="radio" name="rating" />4 Stars & above
        </label>
      </div>
    </div>
  );
}
