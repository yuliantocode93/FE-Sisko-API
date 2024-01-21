import React, { useState, createContext } from "react";

// Membuat context untuk sidebar
export const SidebarContext = createContext();

// Definisi dari SidebarProvider component
const SidebarProvider = ({ children }) => {
  // State untuk menentukan apakah sidebar terbuka atau tertutup
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menutup sidebar
  const handleClose = () => {
    setIsOpen(false);
  };

  // Mengembalikan SidebarContext.Provider dengan value yang berisi state isOpen, setIsOpen, dan fungsi handleClose
  return <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SidebarContext.Provider>;
};

// Ekspor SidebarProvider sebagai default export dari modul ini
export default SidebarProvider;
