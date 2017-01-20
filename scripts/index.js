function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
		var child = ev.target.childNodes[1];
		var moved = document.getElementById(data);
		ev.target.insertBefore(moved, child);
}

function signout()
{

}

function signup()
{
	var username = document.getElementById('uname').value;
	var name = document.getElementById('name').value;
	var email = document.getElementById('signUpEmail').value;
	var pword = document.getElementById('signUpPword').value;
	if(email.includes('@') === true && email.includes(/\s/) === false &&
	 		email.includes('.') === true && pwprd.length >=6 && name.length >=6 &&
 			uname.length >=4)
	{
		return true;
	}
	else
	{
    document.getElementById('er').innerHTML = "ERROR!!! Check and fill again";

			return false;
	}
}
function clear()
{

	document.getElementById('err').innerHTML = '';
	return true;
}

function signin()
{
  function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}
	var email = document.getElementById('semail').value;
	var pword = document.getElementById('spword').value;
	if(email.includes('@')=== true && email.includes(/\s/) === false &&
	 		email.includes('.') === true && pwprd.length >=6)
	{
		return true;
	}
	else
	{
		document.getElementById('err').innerHTML = "ERROR!!! Please check your email "+
		"and password";
		return false;
	}
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
	addbutt.value = 'Add List';
	addbutt.className = 'addButt';
	newCard.id = 'newCard';
	newCard.type = 'text';
	newCard.className = 'genCard';
	newCard.placeholder = 'Add List Title';
	canbutt.type = 'button';
	canbutt.value = 'X';
	canbutt.className = "deList";
	newList.id = 'listHold';
	newList.className = 'genList';

	newList.appendChild(newCard);
	newList.appendChild(brake);
	newList.appendChild(addbutt);
	newList.appendChild(canbutt);

	listHolder.appendChild(newList);

	document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.className.toLowerCase() === 'addbutt') {
			var butns = document.getElementsByClassName('addButt');
			for (var i = 0; i < butns.length; i++)
			{
		    var butn = butns[i];
		    butn.onclick = addCard;
  		}
	}
});

document.querySelector('body').addEventListener('click', function(event) {
if (event.target.className.toLowerCase() === 'delist') {
		var butns = document.getElementsByClassName('deList');
		for (var i = 0; i < butns.length; i++) {
		var butn = butns[i];
		butn.onclick = delCard;
	}
}
});

document.querySelector('body').addEventListener('drop', function(event) {
		if (event.target.className.toLowerCase() === 'genlist') {
				var holders = document.getElementsByClassName('genList');
				for (var i = 0; i < holders.length; i++) {
		    var holder = holders[i];
		    holder.ondrop = drop;
	  	}
		}
	});

	document.querySelector('body').addEventListener('dragover', function(event) {
			if (event.target.className.toLowerCase() === 'genlist') {
					var holders = document.getElementsByClassName('genList');
					for (var i = 0; i < holders.length; i++) {
			    var holder = holders[i];
					holder.ondragover = allowDrop;
		  	}
			}
		});

	document.querySelector('body').addEventListener('dragstart', function(event) {
			if (event.target.className.toLowerCase() === 'draggable-div') {
					var divs = document.getElementsByClassName('draggable-div');
					for (var i = 0; i < divs.length; i++) {
			    var div = divs[i];
			    div.ondragstart = drag;
		  	}
  }
});
}

function delCard()
{
	var parent = this.parentNode;
	var child = this.parentNode.childNodes[1];
	if(this.parentNode.childNodes.length >= 6)
	{
		parent.removeChild(child);
	}
	else
	{
		parent.remove();
	}
}

function addCard()
{
	if(this.value === 'Add Card')
	{
		var card = document.createElement('input');
		var cardcontainer = document.createElement('div');
		var chk = document.createElement('input');
		var brake = document.createElement('br');
		var br = this.previousSibling;
		var child = br.previousSibling;
		var element = this.parentNode;

		cardcontainer.appendChild(card);
		cardcontainer.appendChild(chk);
		cardcontainer.appendChild(brake);
		cardcontainer.draggable = "true";
		cardcontainer.className = "draggable-div";
		cardcontainer.id = "container";

		element.insertBefore(cardcontainer, child);

		card.value = br.previousSibling.value;
    card.type = "text"
		chk.type = 'checkbox';
		chk.className = 'genChk';
		card.className = 'cardClass';

		child.value = null;
	}
	else if(this.value === 'Add List')
	{
		var cardTitleHolder = document.createElement('h4');
		var brake = document.createElement('br');
		var br = this.previousSibling;
		var node = document.createTextNode(br.previousSibling.value);
		var child = br.previousSibling;
		var element = this.parentNode;

		cardTitleHolder.appendChild(node);
		element.insertBefore(cardTitleHolder, child);
		child.placeholder = 'Add Card';
		child.value = null;
		this.value = 'Add Card';
	}
}
