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

function validateSignUp()
{

}

function submit()
{

}

function signup()
{

}

function signin()
{

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
	newCard.placeholder = 'Add List Title';
	newCard.id = 'newCard';
	newCard.className = 'genCard';
	newList.className = 'genList';
	newList.id = 'listHold';
	addbutt.className = 'addButt';


	newList.appendChild(newCard);
	newList.appendChild(brake);
	newList.appendChild(addbutt);
	newList.appendChild(canbutt);

	newCard.style.display = 'table-caption';
	newCard.style.font = '15px Cambria, serif';

	addbutt.style.margin = '5px 2px 1px 2px';
	canbutt.style.margin = '5px 2px 1px 2px';

	listHolder.appendChild(newList);

	document.querySelector('body').addEventListener('click', function(event) {
  if (event.target.className.toLowerCase() === 'addbutt') {
			var butns = document.getElementsByClassName('addButt');
			for (var i = 0; i < butns.length; i++) {
	    var butn = butns[i];
	    butn.onclick = addCard;
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
		cardcontainer.draggable = "true";
		cardcontainer.className = "draggable-div";
		cardcontainer.id = "container";

		element.insertBefore(cardcontainer, child);
		element.insertBefore(brake, child);

		card.value = br.previousSibling.value;
		card.type = 'text';
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
