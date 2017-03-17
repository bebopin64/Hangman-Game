var createDiv = document.createElement("div");

var words = {
	spool: ["S","p","o","o","l"],
	lunch: ["L","u","n","c","h"]
};
var objectSize = Object.keys(words);
var objectSizeReal = objectSize.length;
var spool = ["S","p","o","o","l"];
var lunch = ["L","u","n","c","h"];
var guessed = [];
var wordsArray = ["spool","lunch"];
var currentWord = [];
var wordIndex = 0;
var chosenWord = 0;
var userInput = "";
var guessedIndex = 0;


document.onkeyup = function getUserInput () {
	userInput = event.key;
	compare();
}


function chooseWord() {
	wordIndex = Math.floor(Math.random() * objectSizeReal);
	chosenWord = wordsArray[wordIndex];
	// push chosenWord into an currentWord array using object
}

function compare() {
	guessed.forEach(function(get) {
		if (userInput == get) {
			getUserInput();
		} else {
			guessed.push(userInput);
			checkMatch();
		}
	});
}

function checkMatch() {

}
function playGame() {
	document.onkeyup = function() {
		compare();
		guessed.push(userInput);
		console.log("3");
		console.log(guessed);
	// userInput = event.key;
	// console.log(userInput);
	};
}

function compareUserInput (get) {
	words[currentWord].forEach(function(get) {
		if (userInput = get) {

		}
	
	if (userInput === words[currentWord][0]) {

	}
	});
}

function printCurrentWord() {
	console.log(currentWord);
	console.log(words[currentWord][1]);
}



// // funtion wordLength() {
// // };

// function createDivs() {
// 	for (i=0;i<currentWord.length;i++) {
// 		document.body.appendChild(div);
// 	}
// };

chooseWord();
playGame();