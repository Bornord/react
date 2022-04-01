import { Link } from 'react-router-dom';

import '../styles/App.css';

function Header() {
	return (
		<div className="">
			<nav>
				<Link to="/">Accueil</Link> |{' '}
				<Link to="/survey">Questionnaire</Link>
			</nav>
		</div>
	);
}

export default Header;