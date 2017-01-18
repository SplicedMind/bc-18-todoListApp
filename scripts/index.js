
var firebase = require('firebase');

function validateSignUp()
{
	
}

function submit() {
	window.alert("submit called");
  	/*firebase.database().ref('users/' + userId).set({
    username: email,
    password: pword
  });*/
}

function signup()
{
	var email= document.getElementById('semail').value;
	var pword = document.getElementById('spword').value;
	var userId = 12;
	window.alert("Sign In Called " + email + ":"+ pword);
	firebase.database().ref('users/' + userId).set({
    username: email,
    password: pword
    
  });

}

var email= document.getElementById('semail');
var button = document.getElementById('butt');
function signin()
{
	var dbRef = firebase.database().ref();
	dbRef.child("text").set("Akin");
	window.alert('Called');
}

function cursorChange()
{
	var obj = document.getElementById('addList');
	obj.style.cursor = 'pointer';
}

function createList()
{

	var listHolder = document.getElementById('listHolder');
	var newList = document.createElement('div');
	var brake = document.createElement('br');
	var newCard = document.createElement('input');
	var addbutt = document.createElement('input');
	var canbutt = document.createElement('input');

	addbutt.type = 'button';
	newCard.type = 'text';
	canbutt.type = 'button';
	canbutt.value = 'X';
	addbutt.value = 'Add List';
	newCard.placeholder = 'List Title';
	addbutt.id = 'ad';//Math.floor((Math.random() * 10) + 1);
	newCard.id = 'newCard';//Math.floor((Math.random() * 10) + 20);
	newList.id = 'listHold';//lMath.floor((Math.random() * 10) + 30);

	newList.appendChild(newCard);
	newList.appendChild(brake);
	newList.appendChild(addbutt);
	newList.appendChild(canbutt);

	newList.style.float = 'left';
	newList.style.margin = '10px 10px 10px 10px';
	newList.style.border = '1px solid green';
	newList.style.padding = '10px 5px 10px 5px';
	newList.style.background = 'blue';

	newCard.style.display = 'table-caption'; 
	newCard.style.font = '15px arial, sans-serif';

	addbutt.style.margin = '5px 2px 1px 2px';
	canbutt.style.margin = '5px 2px 1px 2px';

	listHolder.appendChild(newList);

	document.getElementById('ad').addEventListener('click', addCard);
}


function addCard()
{
	window.alert('Called');
	if(this.value === 'Add Card')
	{
		var child = document.getElementById('newCard');
		var card = document.createElement('input');
		var brake = document.createElement('br');
		var element = document.getElementById('listHold');
	
		element.insertBefore(card, child);
		element.insertBefore(brake, child);
		card.value = document.getElementById('newCard').value;
		card.type = 'text';
		card.style.margin = '5px 3px 5px 3px';
		card.style.float = 'initial';
		card.style.border = '1px dashed brown';
		child.value = null;
	}
	else if(this.value === 'Add List')
	{
		window.alert('kkjjj');
		var child = document.getElementById('newCard');
		var cardTitleHolder = document.createElement('h3');
		var element = document.getElementById('listHold');
		var node = document.createTextNode(document.getElementById('newCard').value);
		cardTitleHolder.appendChild(node);

		element.insertBefore(cardTitleHolder, child);
		child.value = null;
		this.value = 'Add Card';
	}
	
}