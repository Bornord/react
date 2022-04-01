import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import '../styles/index.css';

import App from '../Users/Home/App';
import Header from '../../components/Header';
import Survey from './pages/Users/Survey/Survey';
import reportWebVitals from './reports/reportWebVitals';

// Ajout de la version react 18 JS

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
	<div className="App">
		<BrowserRouter>
			<div className="coloration">
				<Header />
			</div>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/admin" element={<Survey />} />
			</Routes>
		</BrowserRouter>
	</div>
);

reportWebVitals();
