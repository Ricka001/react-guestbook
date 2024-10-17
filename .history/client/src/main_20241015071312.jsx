import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Form from "./pages/FormPage.jsx";
import App from "./App.jsx";
import { Routes, Route } from "react-router-dom";
//we need a routing provider in here
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Routes>
      <App />
      <Form />
    </Routes>
  </StrictMode>
);
