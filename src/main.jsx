import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import NoRoute from "./NoRoute";
import Menu from "./Menu";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="*" element={<NoRoute/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
