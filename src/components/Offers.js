import React from 'react';
import '../styles/Offers.scss';

function Offers() {
  return (
    <section className="offers">
      <div className="container">
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
      </div>
      <div className="offers-cards">
        <p className="offers-title">Offers</p>
        <div className="cards-grid">
          <div className="card card-1">
            <div className="content">
              <h2>Move the borders of reality!</h2>
              <p>Go on a space adventure - it's possible with us!</p>
              <button className="btn">Learn more</button>
            </div>
          </div>
          <div className="card card-2">
            <div className="content">
              <h3>Space is not just stars and planets</h3>
              <p>Go on a space adventure</p>
              <button className="btn">Learn more</button>
            </div>
          </div>
          <div className="card card-3">
            <div className="content">
              <h3>For those who dream of stars </h3>
              <p>Our offer: make your dream come true</p>
              <button className="btn">Learn more</button>
            </div>
          </div>
          <div className="card card-4">
            <div className="content">
              <h2>Fulfill your fantastic dreams</h2>
              <p>Space has never been so close</p>
              <button className="btn">Learn more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-info">
        <p className="text-info-title">Embark on a space journey</p>
        <p className="text-info-paragraph">Travelling into space is one of the most exciting and
          unforgettable adventures that can change your life forever.
          And if you have ever dreamed of exploring stars, planets and
          galaxies, then our company is ready to help you realize this
          dream. We offer a unique experience that will allow you to go
          on a space journey and see all the secrets of the universe.
          We guarantee that every moment in space will be filled with
          incredible impressions, excitement and new discoveries. Our
          team of professionals takes care of your safety and comfort
          so that you can fully enjoy your adventure in space. We offer
          various options for space excursions.</p>
        <a href="#"><p className="text-info-link">Read more</p></a>
      </div>
    </section>
  );
}

export default Offers;
