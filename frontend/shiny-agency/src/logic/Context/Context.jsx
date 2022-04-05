import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [donnees, setDonnees] = useState({
		msg: '',
		errors: '',
		donnees: {
			req: '',
			resp: '',
		},
	});

	// specification
	// arg 1. : partie du contexte à modifier : msg , errors ou bien data
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
						resp: '',
					},
				});
				break;
			case 'resp':
				setDonnees({
					msg: donnees.msg,
					errors: donnees.errors,
					donnees: {
						req: donnees.donnees.req,
						resp: data,
					},
				});
				break;
			default:
				console.log('Problème dans le switch du contexte');
		}
		// console.log('après la modif');
		// console.log(donnees);
	};

	return (
		<ThemeContext.Provider value={{ donnees, set }}>
			{children}
		</ThemeContext.Provider>
	);
};
