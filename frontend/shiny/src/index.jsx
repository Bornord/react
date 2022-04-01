import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/index.css';

import Index from './pages/Users/index';
import Admin from './pages/Admin/Admin';
import Error from './components/Error';

import reportWebVitals from './reports/reportWebVitals';

// Ajout de la version react 18 JS

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
	<div className="App">
		<BrowserRouter>
			<h2>Test de titre</h2>
			<Routes>
				<Route path="/user/*" element={<Index />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	</div>
);

reportWebVitals();
