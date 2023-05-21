import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import { Link } from "react-router-dom";

import "./PostersListing.css";
import Filters from "../../components/Filters/Filters";

export default function PostersListing() {
  const { filteredPostersData } = useContext(DataContext);

  return (
    <>
    <div id="poster-list-container">
    <Filters />
    <div id="poster-list">
      {filteredPostersData.map(({ id, name, image, price, rating }) => {
        return (
          <div className="poster" key={id}>
            <Link to={`/poster/${id}`}>
              <img className="poster-image" src={image} alt={name} />
            </Link>
            <p className="poster-name">{name}</p>
            <div className="price-rating">
              <span>{price}</span>
              <span>{rating}</span>
            </div>
          </div>
        );
      })}
    </div>
    </div>
    </>
  );
}
