import { createRoot } from "react-dom/client";
import "/src/index.css";
import React from "react";
import { HashRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
        <App/>
    </HashRouter>
  </React.StrictMode>
);
