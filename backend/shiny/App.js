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
	console.log("all's fine");
	res.status(201).json({
		1: 'Quel ?',
		2: 'Pourquoi ?',
		3: 'Test?',
		4: 'Whta?',
	});
});

module.exports = app;
