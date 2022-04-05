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
		console.log('contexte');
		switch (part) {
			case 'msg':
				setDonnees({
					msg: data,
					errors: '',
					donnees: {
						req: '',
						resp: '',
					},
				});
				break;
			case 'errors':
				setDonnees({
					msg: '',
					errors: data,
					donnees: {
						req: '',
						resp: '',
					},
				});
				break;
			case 'req':
				console.log('avant la modi');
				console.log(donnees);
				setDonnees((obj) => {
					obj.msg = data;
					obj.donnees.req = data;
					obj.errors = data;
					obj.donnees.resp = data;
				});
				break;
			case 'resp':
				console.log('avant la modi');
				console.log(donnees);
				setDonnees((obj) => {
					obj.msg = data;
					obj.donnees.req = data;
					obj.errors = data;
					obj.donnees.resp = data;
				});
				console.log('après la modif');
				console.log(donnees);
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
