import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem,
  updateQuantity,
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from './CartSlice';
import './App.css';

// ── Navbar (reused on Cart page) ───────────────────────────────────────────────
const Navbar = ({ onNavigateHome, onNavigateProducts, onNavigateCart, cartCount }) => (
  <nav className="navbar">
    <span
      className="navbar-brand"
      onClick={onNavigateHome}
      style={{ cursor: 'pointer' }}
    >
      🌿 Paradise Nursery
    </span>
    <ul className="navbar-links">
      <li>
        <a onClick={onNavigateHome} href="#home" style={{ cursor: 'pointer' }}>
          Home
        </a>
      </li>
      <li>
        <a
          onClick={onNavigateProducts}
          href="#plants"
          style={{ cursor: 'pointer' }}
        >
          Plants
        </a>
      </li>
      <li>
        <a
          onClick={onNavigateCart}
          href="#cart"
          className="cart-icon-wrapper"
          style={{ cursor: 'pointer', position: 'relative' }}
        >
          🛒 Cart
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </a>
      </li>
    </ul>
  </nav>
);

// ── Single Cart Item Row ───────────────────────────────────────────────────────
const CartItemRow = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      // Quantity would hit 0 – remove the item
      dispatch(removeItem(item.id));
    }
  };

  const handleDelete = () => {
    dispatch(removeItem(item.id));
  };

  const lineTotal = (item.price * item.quantity).toFixed(2);

  return (
    <div className="cart-item-card">
      {/* Thumbnail */}
      <img src={item.image} alt={item.name} />

      {/* Details */}
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-unit-price">Unit price: ${item.price.toFixed(2)}</p>

        {/* Quantity controls */}
        <div className="cart-item-controls">
          <button className="qty-btn" onClick={handleDecrease} aria-label="Decrease quantity">
            −
          </button>
          <span className="qty-display">{item.quantity}</span>
          <button className="qty-btn" onClick={handleIncrease} aria-label="Increase quantity">
            +
          </button>
        </div>
      </div>

      {/* Line total */}
      <span className="cart-item-total">${lineTotal}</span>

      {/* Delete button */}
      <button className="delete-btn" onClick={handleDelete}>
        🗑 Remove
      </button>
    </div>
  );
};

// ── CartItem (Cart Page) ───────────────────────────────────────────────────────
const CartItem = ({ onNavigateProducts, onNavigateHome }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const [checkoutMessage, setCheckoutMessage] = useState('');

  const handleCheckout = () => {
    setCheckoutMessage('🚧 Coming Soon – Checkout will be available shortly!');
    setTimeout(() => setCheckoutMessage(''), 4000);
  };

  return (
    <div className="cart-page">
      <Navbar
        onNavigateHome={onNavigateHome}
        onNavigateProducts={onNavigateProducts}
        onNavigateCart={() => {}}
        cartCount={cartCount}
      />

      <h2 className="cart-page-title">🛒 Your Shopping Cart</h2>

      <div className="cart-container">
        {cartItems.length === 0 ? (
          /* ── Empty state ── */
          <div className="empty-cart">
            <h2>Your cart is empty 🌱</h2>
            <p>Looks like you haven't added any plants yet.</p>
            <button className="continue-btn" onClick={onNavigateProducts}>
              Browse Plants
            </button>
          </div>
        ) : (
          <>
            {/* ── Cart Item Rows ── */}
            {cartItems.map((item) => (
              <CartItemRow key={item.id} item={item} />
            ))}

            {/* ── Cart Summary ── */}
            <div className="cart-summary">
              <h3>Order Summary</h3>

              <div className="summary-row">
                <span>Total Items:</span>
                <span>{cartCount} plant{cartCount !== 1 ? 's' : ''}</span>
              </div>

              {cartItems.map((item) => (
                <div className="summary-row" key={item.id}>
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}

              <div className="summary-row summary-total">
                <span>Total Cost:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* ── Checkout Message ── */}
            {checkoutMessage && (
              <div
                style={{
                  textAlign: 'center',
                  marginTop: '16px',
                  padding: '14px',
                  background: '#fefcbf',
                  border: '1px solid #f6e05e',
                  borderRadius: '10px',
                  color: '#744210',
                  fontWeight: '600',
                }}
              >
                {checkoutMessage}
              </div>
            )}

            {/* ── Action Buttons ── */}
            <div className="cart-actions">
              {/* Continue Shopping – links back to product listing */}
              <button
                className="continue-btn"
                onClick={onNavigateProducts}
              >
                ← Continue Shopping
              </button>

              {/* Checkout – shows "Coming Soon" message */}
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
