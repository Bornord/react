function app(mail) {
	let msg;
	if (mail.indexOf('@') === -1) {
		msg =
			"Malheureusement, cet e-mail n'est pas correct. ❌ \nPar exemple : paul.durant@gmail.com";
	} else {
		msg =
			'Votre inscription a été validée ! ✅ \nNous allons vous contacter très vite';
	}
	alert(msg);
}

function handle(e, param = e.target.value, treatement = app) {
	if (e.type === 'click') {
		treatement(param);
	} else if (e.type === 'keyup' && e.key === 'Enter') {
		treatement(param);
	} else {
		// rien
	}
}

export default handle;
