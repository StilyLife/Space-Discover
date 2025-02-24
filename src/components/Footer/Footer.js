import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="adventure">
      <img className="rocket" src="/assets/roc.png" alt="Rocket Logo" />
      <a href="#"><p>Exciting space adventure!</p></a>
      </div>
    </footer>
  );
}

export default Footer;
