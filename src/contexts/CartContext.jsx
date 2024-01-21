// Import React dan beberapa hooks dari React
import React, { createContext, useEffect, useState } from "react";

// Membuat context untuk Cart
export const CartContext = createContext();

// Definisi dari CartProvider component
const CartProvider = ({ children }) => {
  // State untuk jumlah item dalam keranjang
  const [itemAmount, setItemAmount] = useState(0);

  // State untuk menyimpan isi keranjang
  const [cart, setCart] = useState([]);

  // State untuk total harga dalam keranjang
  const [total, setTotal] = useState(0);

  // Efek samping: Mengambil data keranjang dari local storage saat komponen dimount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Fungsi untuk menyimpan keranjang ke local storage
  const saveCartToLocalStorage = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Fungsi untuk menambah item ke dalam keranjang
  const addToCart = (product, id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // Jika item sudah ada, tingkatkan jumlahnya
      const newCart = cart.map((item) => (item.id === id ? { ...item, amount: item.amount + 1 } : item));
      setCart(newCart);
      saveCartToLocalStorage(newCart);
    } else {
      // Jika item belum ada, tambahkan item baru dengan jumlah 1
      const newItem = { ...product, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
      saveCartToLocalStorage(newCart);
    }
  };

  // Fungsi untuk menghapus item dari keranjang berdasarkan ID
  const removeCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  // Fungsi untuk membersihkan seluruh isi keranjang
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // Fungsi untuk menambah jumlah item dalam keranjang
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  // Fungsi untuk mengurangi jumlah item dalam keranjang
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      // Jika jumlah item lebih dari 1, kurangi jumlahnya
      const newCart = cart.map((item) => (item.id === id ? { ...item, amount: item.amount - 1 } : item));
      setCart(newCart);
      saveCartToLocalStorage(newCart);

      // Jika jumlah item kurang dari 2, hapus item dari keranjang
      if (cartItem.amount < 2) {
        removeCart(id);
      }
    }
  };

  // Menghitung jumlah total item dalam keranjang
  useEffect(() => {
    const amount = cart.reduce((accumulator, currentItem) => accumulator + currentItem.amount, 0);
    setItemAmount(amount);
  }, [cart]);

  // Menghitung total harga dalam keranjang
  useEffect(() => {
    const newTotal = cart.reduce((accumulator, currentItem) => accumulator + currentItem.price * currentItem.amount, 0);
    setTotal(newTotal);
  }, [cart]);

  // Mengembalikan CartContext.Provider dengan value yang berisi fungsi-fungsi dan data-data terkait keranjang
  return <CartContext.Provider value={{ cart, addToCart, removeCart, increaseAmount, clearCart, decreaseAmount, itemAmount, total }}>{children}</CartContext.Provider>;
};

// Ekspor CartProvider sebagai default export dari modul ini
export default CartProvider;
