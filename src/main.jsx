import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import CleanLinePortfolio from "./CleanLinePortfolio.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CleanLinePortfolio />
  </React.StrictMode>
);
