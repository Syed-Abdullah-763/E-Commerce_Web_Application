import React from "react";
import HomePage from "./pages/home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import AllProducts from "./pages/allProducts";
import NotFound from "./pages/notFound";
import Product from "./pages/product";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/product/:id" element={<Product />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
