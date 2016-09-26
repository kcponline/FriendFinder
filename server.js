// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Curent reservations (DATA)
// =============================================================

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/app/public/home.html'));
});

app.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname, '/app/public/survey.html'));
});

app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});

// app.get('/tables', function (req, res) {
// 	res.sendFile(path.join(__dirname, 'tables.html'));
// });

// var reservArray = [{
// 	name: 'Michelle',
// 	phoneNumber: 1234567,
// 	email: 'abcd@gmail.com',
// 	uniqId: 1
// }, {
// 	name: 'Dima',
// 	phoneNumber: 1234567,
// 	email: 'abcd@gmail.com',
// 	uniqId: 2
// }, {
// 	name: 'Paul',
// 	phoneNumber: 1234567,
// 	email: 'abcd@gmail.com',
// 	uniqId: 3
// }, {
// 	name: 'Kent',
// 	phoneNumber: 1234567,
// 	email: 'abcd@gmail.com',
// 	uniqId: 4
// }, {
// 	name: 'Cheng',
// 	phoneNumber: 1234567,
// 	email: 'abcd@gmail.com',
// 	uniqId: 5
// }];