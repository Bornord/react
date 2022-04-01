import { useParams } from 'react-router-dom';

import '../../../styles/App.css';

function Survey() {
	const { questionNumber } = useParams();
	return (
		<div>
			<h1>Questionnaire 🧮</h1>
			<h2>Question numéro {questionNumber}</h2>
		</div>
	);
}

export default Survey;
