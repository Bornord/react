import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "./styles/index.css";

import App from "./pages/Home/App";
import Header from "./components/Header";
import Survey from "./pages/Survey/Survey";
import reportWebVitals from "./reports/reportWebVitals";

// Ajout de la version react 18 JS

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);
root.render(
	<div className="App">
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/survey" element={<Survey />} />
			</Routes>
		</BrowserRouter>
	</div>
);

reportWebVitals();
