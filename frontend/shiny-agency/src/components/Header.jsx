import { Link } from 'react-router-dom';
import '../styles/App.css';

import logo from '../assets/logo.png';

function Header() {
	return (
		<div>
			<nav className="header-wrapper">
				<div className="tab2">
					<div className="brand-wrapper">
						<div className="droite">
							<img
								className="bord-arrondi"
								src={logo}
								alt="Gif pour montrer que la page n'existe pas"
							/>
						</div>
						<div className="gauche">Shiny</div>
					</div>
				</div>
				<div className="tab">
					<div className="header-wrapper2">
						<Link className="color-snd" to="/">
							Accueil
						</Link>

						<Link className="color-snd" to="/freelance">
							Profils
						</Link>
						<div className="button-header">
							<Link className="hyperlien" to="/survey/1">
								Questionnaire
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Header;
