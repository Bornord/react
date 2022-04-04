import axios from 'axios';
import { useContext, useEffect } from 'react';
import { ThemeContext } from './Context/Context';

import '../styles/App.css';
export function useAxios() {
	const { donnees, set } = useContext(ThemeContext);
	useEffect(() => {
		axios
			.get(`http://localhost:8000/survey`)
			.then((res) => {
				console.log("ici c'est le résultat");
				console.log(res.data.msg);
				set(res.data.msg);
				console.log('post traitement');
				console.log(donnees);
			})
			.catch((error) => console.log(error));
	}, []);
}
