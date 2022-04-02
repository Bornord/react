import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../../../styles/App.css';

function Survey() {
	const { questionNumber } = useParams();
	const questionNumberInt = parseInt(questionNumber);
	const prevQuestionNumber = questionNumberInt - 1;
	const nextQuestionNumber = questionNumberInt + 1;
	return (
		<div>
			<div className="wrapper-survey">
				<div>
					{questionNumberInt !== 1 ? (
						<Link
							className="colorationLink"
							to={`/user/survey/${prevQuestionNumber}`}
							// to={`/user/survey/${prevQuestionNumber}`}
						>
							Question précédente
						</Link>
					) : null}
				</div>
				<div>
					<h1>Questionnaire 🧮</h1>
				</div>
				<div>
					{questionNumberInt !== 10 ? (
						<Link
							className="colorationLink"
							to={`/user/survey/${nextQuestionNumber}`}
						>
							Question Suivante
						</Link>
					) : (
						<Link className="colorationLink" to={`/user/result`}>
							Voir le résultat
						</Link>
					)}
				</div>
			</div>

			<h2>Question numéro {questionNumber}</h2>
		</div>
	);
}

export default Survey;
