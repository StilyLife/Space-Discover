import React from 'react';

function OfferCard({ title, description, className }) {
  return (
    <div className={`card ${className}`}>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="btn">Learn more</button>
      </div>
    </div>
  );
}

export default OfferCard;
