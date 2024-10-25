// context/CartContext.js
'use client'

import { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Create the provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find(item => item.productId === product.productId);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.productId === product.productId
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    
    // Update the total price
    setCartTotal(prevTotal => prevTotal + product.price * quantity);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartTotal, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
