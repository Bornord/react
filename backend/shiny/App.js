const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content, Accept,Content-Type, Authorization'
	);
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, PUT, DELETE, PATCH, OPTIONS'
	);
	next();
});

app.use('/survey', (req, res, next) => {
	console.log("all's fine: ");
	console.log(req.body);
	res.status(201).json({
		msg: [
			'Cherchez-vous un informaticien ?',
			'Cherchez-vous un designer ? ?',
			'Vous exploitez de petits africains ?',
			'Êtes-vous prêt à raquer ?',
		],
	});
});

module.exports = app;
