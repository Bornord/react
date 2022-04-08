import { useContext, useEffect } from 'react';
import { ThemeContext } from '../logic/Context/Context';
import { reactLocalStorage } from 'reactjs-localstorage';

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
				<br></br>
				Le dataStore local client ressemble à:
				<div className="dataStore-wrapper">
					<li>
						{JSON.stringify(
							reactLocalStorage.getObject('resp_questions')
						)}
					</li>
					<li>
						{reactLocalStorage.getObject('resp_questions').length}
					</li>
				</div>
			</div>
		</div>
	);
}

export default Console;
