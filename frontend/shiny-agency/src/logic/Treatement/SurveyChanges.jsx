import { Link } from 'react-router-dom';
import { treat } from '../../logic/Datas/DataManagement';
import { useContext } from 'react';
import { ThemeContext } from '../../logic/Context/Context';

function SurveyChanges(propQstNum) {
	const qstNum = propQstNum.qstNum;
	let nextQstNum = qstNum + 1;
	const { donnees, set } = useContext(ThemeContext);

	return (
		<div>
			{qstNum !== 10 ? (
				<div className="resp-wrapper">
					{console.log(qstNum)}
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
					</Link>
				</div>
			)}
		</div>
	);
}

export default SurveyChanges;
