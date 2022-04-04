import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [donnees, setdonnees] = useState([]);
	// const toggleTheme = () => {
	// 	setTheme(theme === 'light' ? 'dark' : 'light');
	// };
	const set = (data) => {
		setdonnees(data);
	};

	return (
		<ThemeContext.Provider value={{ donnees, set }}>
			{children}
		</ThemeContext.Provider>
	);
};
