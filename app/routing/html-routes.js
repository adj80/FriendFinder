var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// 2 routes- GET route and a default USE route

modules.exports = function (app) {

app.get('/survey', function (req, res) {
	res.sendFile(path.join(_FriendFinder + '/survey.html'));
});

app.use(function (req, res) {
	res.sendFile(path.join(_FriendFinder + '/../public/home.html'));
});

};
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});
