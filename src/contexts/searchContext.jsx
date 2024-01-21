import React, { createContext, useState } from "react";

// Membuat context untuk pencarian
export const SearchContext = createContext();

// Definisi dari SearchProvider component
const SearchProvider = ({ children }) => {
  // State untuk menyimpan nilai pencarian
  const [search, setSearch] = useState("");

  // Mengembalikan SearchContext.Provider dengan value yang berisi state search dan fungsi setSearch
  return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
