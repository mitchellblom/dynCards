//////////////////// UNIX TIME FOR USE IN NEW CARD IDS ////////////////////



//////////////////// OBJECT REFERENCES ///////////////////////////////////

var userInputText = document.getElementById("userInputTextArea")
var createNewCardButton = document.getElementById("Create");
// A card with a button with this ID will be created each time
var newCardSpace = document.getElementById("newCardWritesToHere");
var deleteCardButton = document.getElementById("Destroy");
var idForCreatedCard;
var deleteCard;

//////////////////// EVENT LISTENERS /////////////////////////////////////

createNewCardButton.addEventListener("click", function() {
	createCardId();
});

createNewCardButton.addEventListener("keypress", createCardId);
document.onkeydown = function() {
 if (window.event.keyCode === 13) {
   createCardId();
 } 
};

document.addEventListener("click", function(e) {
	console.log("click anywhere works", e);
	if (e.target.name === "docFindMe") {
		deleteCard(e.target.id);
	}
});

//////////////////// FUNCTIONS FOR CARD CREATION AND DELETION ////////////

function createCardId() { 
	idForCreatedCard = Date.now();
	console.log("idForCreatedCard:", idForCreatedCard);
	createNewCard(idForCreatedCard);
};

function createNewCard(idForCreatedCard) {
	var newCard = 
		`<div class='dynamicCard' id='${idForCreatedCard}'> 
			<p>${userInputText.value}</p>
			<button name='docFindMe' id='Destroy${idForCreatedCard}'>Delete This Card</button>
		</div>`
		// add more info to destroy button ID, concatenate it with something else 
	newCardSpace.innerHTML += newCard;
};

function deleteCard(idForCardToDelete) { // pass id from Delete and splice the tag off.
	console.log("delete card id passing thru to deleteCard funciton", idForCardToDelete);
	var origId = idForCardToDelete.slice(7);
	console.log("write just numbers of passed ID", origId);
	// target child element with id 
	var destroyThisButton = document.getElementById(origId);
	console.log("destroyThisButton", destroyThisButton);
	destroyThisButton.parentNode.removeChild(destroyThisButton);
	// target parent element and delete the child with the id created for that card. 
};

// Planning:

// HTML Code a card. Include a button called "deleteCardButton" Style its size and border.
// HTML -> Use the above card within createNewCard

// JS Ref and EL for Create button ID createNewCardButton
// JS Ref and EL for user input text called userInputTextArea
// JS Ref and EL for delete buttons. Each delete button will have a Unix timestamp to id itself for deletion. 
// JS When clicked run function called createNewCard
// JS Write createNewCard, which will
	// a. already have HTML to contatenate with the User-input text in the textarea id userInputText
	// b. generate an ID using Unix time stamp to an object, 
	// 		print that ID to a new event listener created that listens to the same ID.
	// c. write the whole string to the DOM in a div wrapper id userCardsAppearHere