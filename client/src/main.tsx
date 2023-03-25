import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/source-code-pro";

import "./globals.css";
import { App } from "./components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
