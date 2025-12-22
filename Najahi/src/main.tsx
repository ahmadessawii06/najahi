import { createRoot } from "react-dom/client";
import "/src/index.css";
import React from "react";
import { HashRouter } from "react-router-dom";
import App from "./App";
import DarkMode from "./components/DarkMode.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <DarkMode>
        <App />
      </DarkMode>
    </HashRouter>
  </React.StrictMode>
);
