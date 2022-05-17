import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import BurgerPage from "./pages/BurgerPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import MainPage from "./pages/MainPage";
import OrderPage from "./pages/OrderPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductPage from "./pages/ProductPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel-add" element={<AddProductPage />} />
        <Route path="/admin-panel-edit/:id" element={<EditProductPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details/:id" element={<ProductDetailsPage />} />
        <Route path="/burger" element={<BurgerPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
