import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../logic/Context/Context';
import axios from 'axios';

import { useAxios, useRequest } from '../../logic/Request';

import '../../styles/App.css';

function handle2(e) {
	axios
		.post(`http://localhost:8000/survey`, { msg: e.target.id })
		.then((res) => {})
		.catch((error) => console.log(error));
}

function Survey() {
	const qst = useParams().questionNumber;
	let rep = false;
	const qstNum = parseInt(qst);
	const prevQstNum = qstNum - 1;
	const nextQstNum = qstNum + 1;
	useAxios();
	const { donnees } = useContext(ThemeContext);
	return (
		<div className="button">
			<div className="card">
				<div className="survey-title">Question {qstNum}</div>
				<div>{donnees[qstNum - 1]}</div>
				<div className="resp-wrapper">
					<div
						id={1}
						onClick={(e) => handle2(e)}
						className="resp-button"
					>
						Oui
					</div>
					<div
						id={0}
						onClick={(e) => handle2(e)}
						className="resp-button"
					>
						Non
					</div>
				</div>
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
