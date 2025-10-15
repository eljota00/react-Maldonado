import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === item.id);
      if (exists) {
        return prev.map(p =>
          p.id === item.id
            ? { ...p, quantity: Math.min(p.quantity + quantity, p.stock) }
            : p
        );
      }
      return [...prev, { ...item, quantity }];
    });
  };

  const removeItem = id => setCart(prev => prev.filter(p => p.id !== id));
  const clearCart = () => setCart([]);
  const totalQuantity = () => cart.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = () => cart.reduce((s, i) => s + i.quantity * i.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}
