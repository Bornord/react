import axios from 'axios';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './Context/Context';

import '../styles/App.css';
function useAxios() {
	const { donnees, set } = useContext(ThemeContext);
	useEffect(() => {
		axios
			.get(`http://localhost:8000/survey`)
			.then((res) => {
				set(res.data.msg);
			})
			.catch((error) => console.log(error));
	}, []);
}

function useRequete(e, n) {}

export { useAxios, useRequete };
