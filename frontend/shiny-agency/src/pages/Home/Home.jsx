import '../../styles/App.css';

import home_image from '../../assets/home-image.jpg';

function Home() {
	return (
		<div className="mainCard">
			<div className="vert">
				<h1>
					Nous récupérons vos besoins et nous vous trouverons le
					freelance qui vous correspond ! 🚀{' '}
				</h1>
			</div>
			<div>
				<div className="home-image"></div>
				<img src={home_image} alt="Gif" width="250" height="300" />
			</div>
			<div className="buttonSpace">
				<input
					type="button"
					className="homeButton"
					value="Chercher un freelance"
				/>
			</div>
		</div>
	);
}

export default Home;
