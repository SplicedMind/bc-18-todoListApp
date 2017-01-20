var express = require('express');
var cool = require('cool-ascii-faces');
var firebase = require('firebase');
var bodyParser = require('body-parser');
var app = express();

firebase.initializeApp({
	serviceAccount:"./todoList-952e92ff91c9.json",
	databaseURL:"https://todolist-a5040.firebaseio.com/"
});

var ref = firebase.database().ref();
var meRef = ref.child("message");

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));
app.use('/css', express.static('css'));
app.use('/scripts', express.static('scripts'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/index', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.get('/signup', function(req, res){
	res.sendFile(__dirname + '/signup.html');
});

app.get('/stayorg', function(req, res){
	res.sendFile(__dirname + '/stayorg.html');
});


app.listen(app.get('port'), function() {
});
