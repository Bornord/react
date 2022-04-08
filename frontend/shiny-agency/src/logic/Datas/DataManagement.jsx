import axios from 'axios';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../Context/Context';
import { reactLocalStorage } from 'reactjs-localstorage';

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

function treat(e, donnees, setFunction, qstNum) {
	setFunction('resp_questions', e.target.value, qstNum);
	const tab = donnees.donnees.resp;
	tab[qstNum] = e.target.value;
	reactLocalStorage.set('resp_questions', JSON.stringify(tab));
	axios
		.post(`http://localhost:8000/survey`, { msg: e.target.value })
		.then((res) => {
			// rien
		})
		.catch((error) => setFunction('errors', error));
}

export { useAxios, treat };
