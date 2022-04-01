import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

import '../styles/App.css';

function Header() {
	return (
		<div className="wrapper">
			<div className="coloration">
				<nav className="gauche">
					<Link className="coloration" to="/user/">
						Accueil
					</Link>{' '}
					|{' '}
					<Link className="coloration" to="/user/survey/42">
						Questionnaire
					</Link>
				</nav>
			</div>
			<div>
				<img
					src={logo}
					alt="Logo de l'entreprise Shiny"
					height="50px"
					width="50px"
				/>
			</div>
			<div>Shiny</div>
		</div>
	);
}

export default Header;
