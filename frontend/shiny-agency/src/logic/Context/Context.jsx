import { createContext, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	let inte = [];
	console.log(reactLocalStorage.getObject('resp-questions') === null);
	if (reactLocalStorage.getObject('resp-questions') !== null) {
		console.log('post cond');
		inte = JSON.stringify(reactLocalStorage.getObject('resp-questions'));
		// inte = reactLocalStorage.getObject('resp-questions');
		console.log(inte);
	}
	const [donnees, setDonnees] = useState({
		msg: '',
		errors: '',
		donnees: {
			req: [],
			resp: inte,
		},
	});
	// TODO : il faut dissocier le localStorage pour le MAJ ailleurs qu'ici (via le DataManager)

	// specification
	// arg 1. : partie du contexte à modifier : msg , errors ou bien data (req ou resp)
	// arg 2. : valeur du champ à affecter
	const set = (part, data, qstNum) => {
		qstNum = qstNum || 1;
		switch (part) {
			case 'msg':
				setDonnees({
					msg: data,
					errors: donnees.errors,
					donnees: {
						req: donnees.donnees.req,
						resp: donnees.donnees.resp,
					},
				});
				break;
			case 'errors':
				setDonnees({
					msg: donnees.msg,
					errors: data,
					donnees: {
						req: donnees.donnees.req,
						resp: donnees.donnees.resp,
					},
				});
				break;
			case 'req':
				setDonnees({
					msg: donnees.msg,
					errors: donnees.errors,
					donnees: {
						req: data,
						resp: donnees.donnees.resp,
					},
				});
				break;
			case 'resp_questions':
				if (donnees.donnees.resp.length === 0) {
					donnees.donnees.resp = [
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
						'',
					];
				}
				donnees.donnees.resp[qstNum] = data;
				setDonnees({
					msg: donnees.msg,
					errors: donnees.errors,
					donnees: {
						req: donnees.donnees.req,
						resp: donnees.donnees.resp,
					},
				});
				break;
			default:
				console.log('Problème dans le switch du contexte');
		}
	};

	return (
		<ThemeContext.Provider value={{ donnees, set }}>
			{children}
		</ThemeContext.Provider>
	);
};
