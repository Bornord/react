import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../logic/Context/Context';

import { useAxios } from '../../logic/Request';

import '../../styles/App.css';

function Survey() {
	const qst = useParams().questionNumber;
	const qstNum = parseInt(qst);
	const prevQstNum = qstNum - 1;
	const nextQstNum = qstNum + 1;
	useAxios();
	const { donnees } = useContext(ThemeContext);
	console.log('Dans le traitement de survey');
	console.log(donnees);
	return (
		<div>
			<div className="card">
				<div className="survey-title">Question {qstNum}</div>
				<div className="padding"> Quelles sont vos compétences ?</div>
				<div>test d'affichage du contexte:</div>
				{donnees.map((element) => (
					<li>{element}</li>
				))}
				<div className="survay-wrapper">
					<div className="prec">
						{qstNum !== 1 ? (
							<Link
								className="color-snd"
								to={`/survey/${prevQstNum}`}
							>
								Question précédente
							</Link>
						) : null}
					</div>
					<div className="next">
						{qstNum !== 10 ? (
							<Link
								className="color-snd"
								to={`/survey/${nextQstNum}`}
							>
								Question suivante
							</Link>
						) : (
							<Link className="color-snd" to={`/result`}>
								Voir le résultat
							</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Survey;
