import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;
	background-color: black;
	border-radius: 30px;
	width: 350px;
	transition: 200ms;
	&:hover {
		cursor: pointer;
		box-shadow: 2px 2px 10px #7454ec;
	}
`;

function Card({ label, title, picture }) {
	return (
		<div>
			<CardWrapper>
				<div src={picture} alt="freelance" />
				<div>{title}</div>
				<div>{label}</div>{' '}
			</CardWrapper>
		</div>
	);
}

Card.propTypes = {
	label: PropTypes.string,
	title: PropTypes.string.isRequired,
	picture: PropTypes.string,
};

export default Card;
