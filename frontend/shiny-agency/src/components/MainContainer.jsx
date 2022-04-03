import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import '../styles/index.css';

import Home from '../pages/Home/Home';
import Survey from '../pages/Survey/Survey';
import Freelances from '../pages/Freelances/Freelances';
import Result from '../pages/Result/Result';
import Error from './Error';

function MainContainer() {
	//console.log(useLocation().pathname);
	return (
		<div className="padding">
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route
					path="/survey/:questionNumber"
					element={<Survey />}
				></Route>
				<Route path="/freelance" element={<Freelances />}></Route>
				<Route path="/result" element={<Result />}></Route>
				<Route path="/*" element={<Error />}></Route>
			</Routes>
		</div>
	);
}

export default MainContainer;
