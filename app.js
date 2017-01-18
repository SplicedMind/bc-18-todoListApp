var express = require('express');
var firebase = require('firebase');
//var bodyParser = require('body-parser');

var config = 
{
	apiKey: "AIzaSyB21pDxjhaLtbVragSySMcqWyIL24i79Xk",
	authDomain: "todolist-a5040.firebaseapp.com",
	databaseURL: "https://todolist-a5040.firebaseio.com",
	storageBucket: "todolist-a5040.appspot.com",
	messagingSenderId: "734493733974"
};

firebase.initializeApp(config);

var app = express();

//var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use('/css', express.static('css'));
app.use('/scripts', express.static('scripts'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});


app.get('/signup', function(req, res){
	res.sendFile(__dirname + '/signup.html');
});

app.get('/stayorg', function(req, res){
	res.sendFile(__dirname + '/stayorg.html');
});

app.listen(2020);

/*{
  "rules": {
    ".read": "auth == null",
    ".write": "auth == null"
  }
}*/