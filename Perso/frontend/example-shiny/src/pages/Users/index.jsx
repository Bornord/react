import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import '../../styles/index.css';

import Home from './Home/Home';
import Header from '../../components/Header';
import Error from '../../components/Error';
import Result from './Result/Result';
import Freelance from './Freelance/Freelance';
import Survey from './Survey/Survey';
import Footer from '../../components/Footer';

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
				<Route path="/freelance" element={<Freelance />}></Route>
				<Route path="/result" element={<Result />}></Route>
				<Route path="/*" element={<Error />}></Route>
			</Routes>
			{useLocation().pathname === '/' ? <Home></Home> : null}
			<Footer></Footer>
		</div>
	);
}

export default App;
