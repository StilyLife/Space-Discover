import React from 'react';
import Header from './components/Header/Header';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';
import './styles/App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Offers />
      <Footer />
    </div>
  );
}

export default App;
