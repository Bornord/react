import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../logic/Context/Context';
import SurveyChanges from '../../logic/Treatement/SurveyChanges';

import { useAxios } from '../../logic/Datas/DataManagement';

import '../../styles/App.scss';

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
				<SurveyChanges />
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
