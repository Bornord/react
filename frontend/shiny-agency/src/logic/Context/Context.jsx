import { createContext, useState } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	// TODO : il faut dissocier le localStorage pour le MAJ ailleurs qu'ici (via le DataManager)
	const [donnees, setDonnees] = useState({
		msg: '',
		errors: '',
		donnees: {
			req: [],
			resp: [],
		},
	});

	// specification
	// arg 1. : partie du contexte à modifier : msg , errors ou bien data (req ou resp)
	// arg 2. : valeur du champ à affecter
	const set = (part, data) => {
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
			case 'resp':
				donnees.donnees.resp.push(data);
				console.log(donnees.donnees.resp);
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
		reactLocalStorage.set('reponses', JSON.stringify(donnees.donnees.resp));
	};

	return (
		<ThemeContext.Provider value={{ donnees, set }}>
			{children}
		</ThemeContext.Provider>
	);
};
