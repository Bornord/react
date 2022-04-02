import '../../../styles/App.css';
import Card from '../../../components/Card';
import DefaultPicture from '../../../assets/logo.svg';

import styled from 'styled-components';

const freelanceProfiles = [
	{
		name: 'Jane Doe',
		jobTitle: 'Devops',
		picture: DefaultPicture,
	},
	{
		name: 'John Doe',
		jobTitle: 'Developpeur frontend',
		picture: DefaultPicture,
	},
	{
		name: 'Jeanne Biche',
		jobTitle: 'Développeuse Fullstack',
		picture: DefaultPicture,
	},
];

function Freelance() {
	return (
		<div>
			<h1>Hello Freelance 😀</h1>
			{freelanceProfiles.map((profile, index) => (
				<div key={`${profile.name}-${index}`}>
					<Card
						label={profile.jobTitle}
						picture={profile.picture}
						title={profile.name}
					/>
				</div>
			))}
		</div>
	);
}

export default Freelance;
