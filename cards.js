console.log("Unix time", Date.now());


// Planning:

// HTML Code a card. Include a button called "Delete Me." Style its size and border.
// HTML -> Use the above card within createNewCard

// JS Ref and EL for Create button ID createNewCardButtonArea
// JS Ref and EL for user input text called userInputTextArea
// JS Ref and EL for delete buttons. Each delete button will have a Unix timestamp to id itself for deletion. 
// JS When clicked run function called createNewCard
// JS Write createNewCard, which will
	// a. already have HTML to contatenate with the User-input text in the textarea id userInputText
	// b. generate an ID using Unix time stamp to an object, 
	// 		print that ID to a new event listener created that listens to the same ID.
	// c. write the whole string to the DOM in a div wrapper id userCardsAppearHere