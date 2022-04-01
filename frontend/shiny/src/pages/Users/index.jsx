import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import '../../styles/index.css';

import Home from './Home/Home';
import Header from '../../components/Header';
import Error from '../../components/Error';
import Survey from './Survey/Survey';

// Ajout de la version react 18 JS

function App() {
	console.log(useLocation().pathname);
	return (
		<div className="App">
			<h2> Ceci est l'accès utilisateur</h2>
			<div className="coloration">
				<Header />
			</div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/survey/:questionNumber"
					element={<Survey />}
				></Route>
				<Route path="/*" element={<Error />}></Route>
			</Routes>
			{useLocation().pathname === '/' ? <Home></Home> : null}
		</div>
	);
}

export default App;
