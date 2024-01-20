import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [itemAmount, setItemAmount] = useState(0);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const saveCartToLocalStorage = (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => (item.id === id ? { ...item, amount: item.amount + 1 } : item));
      setCart(newCart);
      saveCartToLocalStorage(newCart);
    } else {
      const newItem = { ...product, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
      saveCartToLocalStorage(newCart);
    }
  };

  const removeCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => (item.id === id ? { ...item, amount: item.amount - 1 } : item));
      setCart(newCart);
      saveCartToLocalStorage(newCart);

      if (cartItem.amount < 2) {
        removeCart(id);
      }
    }
  };

  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
    setItemAmount(amount);
  }, [cart]);

  useEffect(() => {
    const newTotal = cart.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.amount, 0);
    setTotal(newTotal);
  }, [cart]);

  return <CartContext.Provider value={{ cart, addToCart, removeCart, increaseAmount, clearCart, decreaseAmount, itemAmount, total }}>{children}</CartContext.Provider>;
};

export default CartProvider;
