import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

import '../styles/App.css';

function Header() {
	return (
		<div className="wrapper-header">
			<div className="coloration">
				<nav className="gauche">
					<Link className="coloration" to="/user/">
						Accueil
					</Link>{' '}
					|{' '}
					<Link className="coloration" to="/user/survey/1">
						Questionnaire
					</Link>{' '}
					|{' '}
					<Link className="coloration" to="/user/freelance">
						Espace freelance
					</Link>
				</nav>
			</div>
			<div className="centre-vertical">
				<img
					className="centre-vertical"
					src={logo}
					alt="Logo de l'entreprise Shiny"
					height="80px"
					width="80px"
				/>
			</div>
			<div className="centre-vertical">Shiny</div>
		</div>
	);
}

export default Header;
