# NSS Dynamic Cards Exercise

![Splashpage](**screenshot will go here**)

## Project Summary:
An exercise in constructive and destructive *DOM manipulation* using exclusively *vanilla Javascript*.

<hr>

## Requirements:
1. Create an HTML page that contains a text area and a button labeled Create.
1. When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
1. When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

<hr>

## Demonstrated:
 - Methods like *.slice* and *.parentNode.removeChild*
 - *Backtick* notation: `writing JS in ${here}` for easier reading and concatenation
 - Use of *Unix Time* as unique identifier for created elements and those to delete
 - Viable plan to complete the majority of the exercise before beginning to actually code


<hr>

## Pre-code Planning:
 - HTML Code a card. Include a button called "deleteCardButton" Style its size and border.
 - HTML -> Use the above card within createNewCard
 - JS Ref and EL for Create button ID createNewCardButton
 - JS Ref and EL for user input text called userInputTextArea
 - JS Ref and EL for delete buttons. Each delete button will have a Unix timestamp to id itself for deletion. 
 - JS When clicked run function called createNewCard
 - JS Write createNewCard, which will
	a. Already have HTML to contatenate with the User-input text in the textarea id userInputText
	b. Generate an ID using Unix time stamp to an object, 
			print that ID to a new event listener created that listens to the same ID.
	c. Write the whole string to the DOM in a div wrapper id userCardsAppearHere.

<hr>

## Personal Comments:

One of my favorite activities is planning something out to near-completion before diving into it. Plans change necessarily, but it is much easier to pivot with a viable map to start with. I am getting a personal style down for commenting and code order, and as a result I like vanilla Javascript more than a few weeks ago.