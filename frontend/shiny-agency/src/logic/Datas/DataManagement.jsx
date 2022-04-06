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
				set('req', res.data.msg);
			})
			.catch((error) => set('errors', error));
	}, []);
}

function treat(e, set) {
	set('resp', e.target.value);
	axios
		.post(`http://localhost:8000/survey`, { msg: e.target.value })
		.then((res) => {
			// rien
		})
		.catch((error) => set('errors', error));
}

export { useAxios, treat };
