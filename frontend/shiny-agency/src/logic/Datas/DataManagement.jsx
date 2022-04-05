import axios from 'axios';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../Context/Context';

import '../../styles/App.css';

function useAxios() {
	const { set } = useContext(ThemeContext);
	useEffect(() => {
		axios
			.get(`http://localhost:8000/survey`)
			.then((res) => {
				set(res.data.msg);
			})
			.catch((error) => console.log(error));
	}, []);
}

function treat(e) {
	console.log(e.target.value);
	axios
		.post(`http://localhost:8000/survey`, e.target.value)
		.then((res) => {
			// rien
		})
		.catch((error) => console.log(error));
}

export { useAxios, treat };
