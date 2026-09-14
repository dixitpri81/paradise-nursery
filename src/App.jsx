import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import ProductList from './ProductList';
import CartItem from './CartItem';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>
          Discover the beauty of nature with our handpicked collection of
          premium houseplants. From lush tropicals to hardy succulents,
          find the perfect green companion for your home.
        </p>
        <button className="get-started-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

const App = () => {
  // 'home' | 'products' | 'cart'
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <Provider store={store}>
      {currentPage === 'home' && (
        <LandingPage onGetStarted={() => setCurrentPage('products')} />
      )}
      {currentPage === 'products' && (
        <ProductList
          onNavigateCart={() => setCurrentPage('cart')}
          onNavigateHome={() => setCurrentPage('home')}
        />
      )}
      {currentPage === 'cart' && (
        <CartItem
          onNavigateProducts={() => setCurrentPage('products')}
          onNavigateHome={() => setCurrentPage('home')}
        />
      )}
    </Provider>
  );
};

export default App;
