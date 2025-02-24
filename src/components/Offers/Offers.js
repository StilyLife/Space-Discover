import React from 'react';
import Banner from './Banner';
import OffersGrid from './OffersGrid';
import TextInfo from './TextInfo';
import './Offers.scss';

function Offers() {
  return (
    <section className="offers">
      <div className="container">
        <Banner />
        <OffersGrid />
        <TextInfo />
      </div>
    </section>
  );
}

export default Offers;
