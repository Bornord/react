import handle from '../logic/InputTreatement';

function Error() {
	return (
		<div className="color">
			<div className="padding">
				Si vous êtes un freelance et que vous souhaitez travailler ⛏
			</div>
			<div className="padding">Laissez votre mail :</div>
			<div className="padding">
				<input
					className="button"
					id="1"
					type="text"
					onKeyUp={(e) => handle(e)}
				/>
				<input
					id="2"
					className="button"
					value="S'inscrire"
					type="button"
					onClick={(e) =>
						handle(e, document.getElementById('1').value)
					}
				/>
			</div>
		</div>
	);
}

export default Error;
