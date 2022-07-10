import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import NoRoute from "./NoRoute";
import Menu from "./Menu";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="*" element={<NoRoute/>} />
    </Routes>
  </BrowserRouter>
);
