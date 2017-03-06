//////////////////// OBJECT REFERENCES ///////////////////////////////////

var userInputText = document.getElementById("userInputTextArea")
var createNewCardButton = document.getElementById("Create");
// A card with a button with this ID will be created each time
var newCardSpace = document.getElementById("newCardWritesToHere");
// var deleteCardButton = document.getElementById("Destroy");
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
	if (e.target.name === "docFindMe") {
		deleteCard(e.target.id);
	}
});

//////////////////// FUNCTIONS FOR CARD CREATION AND DELETION ////////////

function createCardId() { 
	idForCreatedCard = Date.now();
	createNewCard(idForCreatedCard);
};

function createNewCard(idForCreatedCard) {
	var newCard = 
		`<div class='dynamicCard' id='${idForCreatedCard}'> 
			<p>${userInputText.value}</p>
			<button name='docFindMe' id='Destroy${idForCreatedCard}'>Delete This Card</button>
		</div>`
		// the word Destroy is concatenated above with the unique id created for that card
	newCardSpace.innerHTML += newCard;
		// clears out the textarea for more entry after the card is written to the DOM
	userInputText.value = "";
};

function deleteCard(idForCardToDelete) {  // idForCardToDelete is the same as e.target.id from clicking deleteCard
	// passing id from Delete and splicing the tag off.
	var origId = idForCardToDelete.slice(7);
	var destroyThisButton = document.getElementById(origId);
	destroyThisButton.parentNode.removeChild(destroyThisButton);
	// target parent element and delete the child with the id created for that card.
};