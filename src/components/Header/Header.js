import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-container">
          <img src="/assets/LOGO.svg" alt="Space Adventure Logo" />
          <img src="/assets/Vector.png" alt="Vector logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li>
              <a href="#" className="cart-icon">
                <img src="/assets/trash.png" alt="Корзина" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
