//////////////////// UNIX TIME FOR USE IN NEW CARD IDS ////////////////////



//////////////////// OBJECT REFERENCES ///////////////////////////////////

var userInputText = document.getElementById("userInputTextArea")
var createNewCardButton = document.getElementById("Create");
// A card with a button with this ID will be created each time
var newCardSpace = document.getElementById("newCardWritesToHere");
var deleteCardButton = document.getElementsByName("Destroy");				// is it by name or by class?
var idForCreatedCard;

//////////////////// EVENT LISTENERS /////////////////////////////////////


createNewCardButton.addEventListener("click", function() {
	createCardId();
});

deleteCardButton.addEventListener("click", function() {
	deleteCard();
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
			<button id='Destroy'>Delete This Card</button> 
		</div>`
		console.log("newCard", newCard);
	newCardSpace.innerHTML = newCard;
};

function deleteCard() {
	//will identify the card to delete by its self identifier.
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