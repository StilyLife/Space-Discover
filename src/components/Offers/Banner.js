import React from 'react';

function Banner() {
  return (
    <div className="banner">
      <div className="hero-content">
        <h1>Discover the vast expanses of <span className="highlight">space</span></h1>
        <p>Where the possibilities are <span className="yellowSpan">endless!</span></p>
        <button className="btn">Learn more</button>
      </div>
      <div className="title-image">
        <img src="../assets/EARTH.png" alt="Space Adventure" />
      </div>
    </div>
  );
}

export default Banner;
