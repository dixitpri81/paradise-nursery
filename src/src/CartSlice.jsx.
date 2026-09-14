import { createSlice } from '@reduxjs/toolkit';

/**
 * CartSlice – Redux Toolkit slice for Paradise Nursery shopping cart.
 *
 * State shape:
 *   items: Array<{ id, name, price, image, quantity }>
 *
 * Reducers:
 *   addItem(state, action)      – adds a new plant to the cart (quantity = 1)
 *   removeItem(state, action)   – removes a plant from the cart by id
 *   updateQuantity(state, action) – updates the quantity of a cart item by id
 */

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /**
     * addItem
     * Payload: { id, name, price, image }
     * Adds the plant to the cart with quantity 1.
     * If the item already exists, its quantity is incremented by 1.
     */
    addItem(state, action) {
      const incomingItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === incomingItem.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...incomingItem, quantity: 1 });
      }
    },

    /**
     * removeItem
     * Payload: id (string)
     * Removes the plant that matches the given id from the cart entirely.
     */
    removeItem(state, action) {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },

    /**
     * updateQuantity
     * Payload: { id, quantity } (quantity must be >= 1)
     * Updates the quantity of the matching cart item.
     * If the new quantity is 0 or less, the item is removed from the cart.
     */
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        const item = state.items.find((item) => item.id === id);
        if (item) {
          item.quantity = quantity;
        }
      }
    },
  },
});

// ── Selectors ──────────────────────────────────────────────────────────────────

/** Returns the full array of cart items */
export const selectCartItems = (state) => state.cart.items;

/** Returns the total number of individual plant units in the cart */
export const selectCartCount = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

/** Returns the total monetary value of all cart items */
export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

// ── Action Exports ─────────────────────────────────────────────────────────────
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// ── Reducer Export ─────────────────────────────────────────────────────────────
export default cartSlice.reducer;
