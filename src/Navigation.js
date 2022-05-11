import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import MainPage from "./pages/MainPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel-add" element={<AddProductPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
