import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { categoryInfo } from "../../data/categoryInfo";
import { DataContext } from "../../contexts/DataContext";
import "./HomePage.css";

export default function HomePage() {
  const { dispatch } = useContext(DataContext);
  const navigate = useNavigate();

  const visitCategory = (category) => {
    dispatch({ type: "CLEAR_ALL_FILTERS" });
    dispatch({ type: "SELECT_CATEGORY", payload: category });
    navigate("/posters-listing");
  };

  return (
    <>
      <div id="home-container">
        <div id="about-and-tagline">
          <p id="about">Welcome to Cosmic Posters</p>
          <p id="tagline">Transform your space into a celestial gallery</p>
          <Link id="home-buy-now-link" to="/posters-listing">
            Buy Now
          </Link>
        </div>
        <div id="categories">
          <p id="heading">Featured Categories</p>
          <div id="category-row">
            {categoryInfo.map(({ name, description, imageLink }, index) => {
              return (
                <div
                  key={index}
                  className="category"
                  onClick={() => visitCategory(name.toLowerCase())}
                >
                  <img className="category-image" src={imageLink} alt={name} />
                  <div className="category-info">
                    <p className="category-name">{name}</p>
                    <p className="category-description">{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
