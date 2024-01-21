import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import DetailUser from "./pages/DetailUser";
import Checkout from "./pages/Checkout";
import Invoice from "./pages/invoicepage";
import ProductList from "./pages/productList";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/detailuser" element={<DetailUser />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/coba" element={<ProductList />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
};

export default App;
