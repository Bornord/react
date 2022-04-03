import React from 'react';
import { Routes, Route } from 'react-router-dom';

import '../styles/index.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MainContainer from '../components/MainContainer';

import '../styles/App.css';

function App() {
	return (
		<div className="generality">
			<div className="coloration">
				<Header />
			</div>
			<MainContainer />
			<Footer></Footer>
		</div>
	);
}

export default App;
