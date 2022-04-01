import React from "react";
import * as ReactDOMClient from "react-dom/client";

import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reports/reportWebVitals";

// Ajout de la version react 18 JS
const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(<App />);

reportWebVitals();
