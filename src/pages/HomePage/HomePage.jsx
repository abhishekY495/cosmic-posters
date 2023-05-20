import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div id="home-container">
        <div id="about-and-tagline">
          <p id="about">Welcome to Cosmic Posters</p>
          <p id="tagline">Transform your space into a celestial gallery</p>
          <Link id="home-explore-link" to="/posters-listing">
            Explore
          </Link>
        </div>
        <div id="categories">
          <p id="heading">Featured Categories</p>
          <div id="category-row">
            <div className="category">
              <p className="category-name">Planet</p>
              <p className="category-detail">
                Our solar system is home to 8 amazing planets, ranging from
                small rocky worlds to large and gaseous with extreme
                temperatures.
              </p>
            </div>
            <div className="category">
              <p className="category-name">Moon</p>
              <p className="category-detail">
                Moons come in many shapes, sizes, and types. Few have
                atmospheres and even hidden oceans beneath their surfaces.
              </p>
            </div>
            <div className="category">
              <p className="category-name">Galaxy</p>
              <p className="category-detail">
                Galaxies are a huge collection of gas, dust, and billions of
                stars and their solar systems, all held together by gravity.
              </p>
            </div>
            <div className="category">
              <p className="category-name">Nebula</p>
              <p className="category-detail">
                A nebula is a giant cloud of dust and gas in space that come
                from the gas and dust thrown out by the explosion of a dying
                star.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
