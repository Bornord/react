import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../logic/Context/Context';

import { useAxios, treat } from '../../logic/Datas/DataManagement';

import '../../styles/App.css';

function Survey() {
	const qst = useParams().questionNumber;
	const qstNum = parseInt(qst);
	const prevQstNum = qstNum - 1;
	const nextQstNum = qstNum + 1;
	useAxios();

	const { donnees, set } = useContext(ThemeContext);
	return (
		<div className="button">
			<div className="card">
				<div className="survey-title">Question {qstNum}</div>
				<div>{donnees.donnees.req[qstNum - 1]}</div>

				{qstNum !== 10 ? (
					<div className="resp-wrapper">
						<Link
							to={`/survey/${nextQstNum}`}
							onClick={(e) => {
								treat(e, set);
							}}
						>
							<input
								id={1}
								className="resp-button"
								type="button"
								value="Oui"
							/>
						</Link>
						<Link to={`/survey/${nextQstNum}`}>
							<input
								id={0}
								className="resp-button"
								type="button"
								value="Non"
								onClick={(e) => {
									treat(e, set);
								}}
							/>
						</Link>
					</div>
				) : (
					<div className="resp-wrapper">
						<Link to={`/result`}>
							<input
								id={1}
								className="resp-button"
								type="button"
								value="Oui"
								onClick={(e) => {
									treat(e, set);
								}}
							/>
						</Link>
						<Link to={`/result`}>
							<input
								id={0}
								className="resp-button"
								type="button"
								value="Non"
								onClick={(e) => {
									treat(e, set);
								}}
							/>
						</Link>{' '}
					</div>
				)}
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
