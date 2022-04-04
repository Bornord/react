import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [donnees, setdonnees] = useState([]);
	// const toggleTheme = () => {
	// 	setTheme(theme === 'light' ? 'dark' : 'light');
	// };
	const set = () => {
		console.log('affichage de set');
		console.log(donnees);
		setdonnees(donnees);
		console.log('affichage de set: post modif ');
		console.log(donnees);
	};

	return (
		<ThemeContext.Provider value={{ donnees, set }}>
			{children}
		</ThemeContext.Provider>
	);
};
