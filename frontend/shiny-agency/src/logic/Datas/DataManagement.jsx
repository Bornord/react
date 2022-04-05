import axios from 'axios';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../Context/Context';

import '../../styles/App.css';

function useAxios() {
	const { donnees, set } = useContext(ThemeContext);
	useEffect(() => {
		axios
			.get(`http://localhost:8000/survey`)
			.then((res) => {
				set('req', res.data.msg);
			})
			.catch((error) => console.log(error));
	}, []);
}

function treat(e, set) {
	axios
		.post(`http://localhost:8000/survey`, { msg: e.target.value })
		.then((res) => {
			set('resp', [e.target.value]);
		})
		.catch((error) => console.log(error));
}

export { useAxios, treat };
