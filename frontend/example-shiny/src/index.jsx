import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/index.css';
import { ThemeProvider } from './utils/Context';

import Index from './pages/Users/index';
import Admin from './pages/Admin/Admin';
import Error from './components/Error';

import reportWebVitals from './reports/reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
	<div className="App">
		<BrowserRouter>
			<h2>Test de titre</h2>
			<ThemeProvider>
				<Routes>
					<Route path="/user/*" element={<Index />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	</div>
);

reportWebVitals();
