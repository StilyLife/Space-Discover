import React from 'react';
import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
      {/* Верхняя часть: логотип + меню */}
      <div className="header-top">
        <div className="logo-container">
          <img src="../assets/logo.svg" alt="Space Adventure Logo" />
          <img src="../assets/Vector.png" alt="Vector logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li>
              <a href="#" className="cart-icon">
                <img src="../assets/trash.png" alt="Корзина" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Нижняя часть: текст + планета */}
      <div className="container">
        <div className="header-content">
          <h1>Discover the vast expanses of <span className="span">space</span></h1>
          <p>Where the possibilities are endless!</p>
          <button className="btn">Learn more</button>
        </div>
        <div className="header-image">
          <img src="../assets/EARTH.png" alt="Space Adventure" />
        </div>
      </div>
    </header>
  );
}

export default Header;
