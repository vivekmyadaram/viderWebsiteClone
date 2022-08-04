import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Application from "./Application";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Application/>} />
        <Route path="/todo" element={<App/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
