import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../../../styles/App.css';

import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
	padding: 10px;
	border: 6px solid red;
	border-bottom-color: transparent;
	border-radius: 22px;
	animation: ${rotate} 1s infinite linear;
	height: 0;
	width: 0;
`;

function Survey() {
	const { questionNumber } = useParams();
	const questionNumberInt = parseInt(questionNumber);
	const prevQuestionNumber = questionNumberInt - 1;
	const nextQuestionNumber = questionNumberInt + 1;
	const [message, setMsg] = useState('');
	const [isDataLoading, setDataLoading] = useState(false);
	useEffect(() => {
		setDataLoading(true);
		axios
			.get(`http://localhost:8000/survey`)
			.then((res) => setMsg(res.data), setDataLoading(false))
			.catch((error) => console.log(error));
	}, []);

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
			<h1>
				{isDataLoading ? (
					<Loader />
				) : (
					<div>{message[questionNumber]}</div>
				)}{' '}
			</h1>
		</div>
	);
}

export default Survey;
