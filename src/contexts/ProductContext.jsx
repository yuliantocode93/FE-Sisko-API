// Mengimpor modul React dan beberapa modul terkait dari React
import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// Membuat konteks untuk produk menggunakan createContext dari React
export const ProductContext = createContext();

// Membuat provider untuk konteks produk
const ProductProvider = ({ children }) => {
  // State untuk menyimpan data produk
  const [products, setProducts] = useState([]);

  // Efek samping untuk mengambil data produk dari API menggunakan Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengirim permintaan GET ke endpoint API produk
        const response = await axios.get("https://sistemtoko.com/public/demo/product");

        // Mengatur state products dengan data yang diterima dari API
        setProducts(response.data.aaData);
      } catch (error) {
        // Menangani kesalahan jika terjadi ketika mengambil data
        console.error("Error mengambil data:", error);
      }
    };

    // Memanggil fungsi fetchData untuk mengambil data ketika komponen pertama kali di-mount
    fetchData();
  }, []); // Efek samping hanya dijalankan sekali pada saat pembuatan komponen

  // Me-render komponen provider dengan menyediakan nilai produk ke dalam konteks
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

// Mengekspor komponen ProductProvider sebagai default eksport
export default ProductProvider;
