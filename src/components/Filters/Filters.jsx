import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";

export default function Filters() {
  const { categories } = useContext(DataContext);
  return (
    <div>
      {categories.map((category) => {
        return (
          <label>
            <input type="checkbox" />
            {category}
          </label>
        );
      })}
    </div>
  );
}
