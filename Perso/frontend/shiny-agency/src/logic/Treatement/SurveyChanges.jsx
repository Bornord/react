import { Link } from 'react-router-dom';
import { treat } from '../../logic/Datas/DataManagement';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../logic/Context/Context';

function SurveyChanges() {
	const qst = useParams().questionNumber;
	const qstNum = parseInt(qst);
	let nextQstNum = qstNum + 1;
	const { donnees, set } = useContext(ThemeContext);
	return (
		<div>
			{qstNum !== 10 ? (
				<div className="resp-wrapper">
					<Link
						to={`/survey/${nextQstNum}`}
						onClick={(e) => {
							treat(e, donnees, set, qstNum);
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
								treat(e, donnees, set, qstNum);
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
								treat(e, donnees, set, qstNum);
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
								treat(e, donnees, set, qstNum);
							}}
						/>
					</Link>
				</div>
			)}
		</div>
	);
}

export default SurveyChanges;
