import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { CountryProvider } from "./contextApi/ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <CountryProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </CountryProvider>
);
