import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../../contexts/DataContext";
import "./Poster.css"

export default function Poster() {
  const { postersData } = useContext(DataContext);
  const { id } = useParams();

  const poster = postersData.find((poster) => poster.id === id);

  return (
    <div id="poster">
      <img id="poster-image" src={poster?.image} alt={poster.name} />
      <div id="poster-info">
        <h2 id="poster-name">{poster?.name}</h2>
        <p id="poster-rating">{poster.rating}</p>
        <p id="poster-price">₹{poster.price}</p>
        <p id="poster-description">{poster.description}</p>
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>
    </div>
  );
}
