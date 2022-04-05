import { useContext, useEffect } from 'react';
import { ThemeContext } from '../logic/Context/Context';

function Console() {
	const { donnees, set } = useContext(ThemeContext);
	return (
		<div className="console-wrapper">
			<div>
				Les messages d'erreurs potentielles sont les suivants :{' '}
				<div className="error-wrapper">{donnees.errors}</div>
			</div>
			<div>
				Le dataStore requête ressemble à:
				<div className="dataStore-wrapper">{donnees.donnees.req}</div>
				<br></br>
				Le dataStore réponse ressemble à:
				<div className="dataStore-wrapper">{donnees.donnees.resp}</div>
			</div>
		</div>
	);
}

export default Console;
