import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./store/AppProvider";

const container = document.getElementById("root");
if (!container) throw new Error("Élément #root introuvable");

createRoot(container).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
