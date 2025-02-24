import React from 'react';
import OfferCard from './OfferCard';

const offersData = [
  {
    title: "Move the borders of reality!",
    description: "Go on a space adventure - it's possible with us!",
    className: "card-1"
  },
  {
    title: "Space is not just stars and planets",
    description: "Go on a space adventure",
    className: "card-2"
  },
  {
    title: "For those who dream of stars",
    description: "Our offer: make your dream come true",
    className: "card-3"
  },
  {
    title: "Fulfill your fantastic dreams",
    description: "Space has never been so close",
    className: "card-4"
  }
];

function OffersGrid() {
  return (
    <div className="offers-cards">
      <p className="offers-title">Offers</p>
      <div className="cards-grid">
        {offersData.map((offer, index) => (
          <OfferCard
            key={index}
            title={offer.title}
            description={offer.description}
            className={offer.className}
          />
        ))}
      </div>
    </div>
  );
}

export default OffersGrid;
