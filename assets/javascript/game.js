
// Define Variables ----------------------------------------------------------

var hangmanWords = [
	"spool","house","words","mends","fives","chive","moose"
	];
var randomNumber = Math.floor(Math.random() * 7);
var randomWord = hangmanWords[randomNumber];
var counter = 10;
var lettersGuessedArr = [];
var lettersGuessed = document.getElementById('lettersGuessed');
var lettersClear = document.querySelector('#lettersGuessed');
var li = document.getElementsByClassName('letterHolder');
var attemptTitle = document.querySelector('.guesses');
var winNumber = document.querySelector('.wins');
var personGuess = "";
var beenGuessed = 0;
var letterCount = 0;
var wins = 0;

// Create Functions ------------------------------------------------------------

// Resets the game after win/loss

function reset() {
	randomNumber = Math.floor(Math.random() * 7);
	randomWord = hangmanWords[randomNumber];
	letterCount = 0;
	counter = 10;
	lettersGuessedArr = [];
	for (j=0;j<randomWord.length;j++) {
		li[j].textContent = "_";
	};
	lettersClear.innerHTML = "";
	attemptTitle.innerHTML = "You have this many attempts left: " + counter;
	runGame();
}

// Checks user input for proper handling 

function checkGuess() {
	// if user out of guesses - resets game
	if (counter === 1) {
		reset();
		return;
	};
	for (i=0;i<lettersGuessedArr.length;i++) {
		if (personGuess === lettersGuessedArr[i]) {
			beenGuessed = 1;
		};
	};
	if (beenGuessed === 1) {
		beenGuessed = 0;
		runGame();
	} else {
		for (j=0;j<randomWord.length;j++) {
			if (personGuess === randomWord[j]) {
				lettersGuessedArr.push(personGuess);
				li[j].textContent = randomWord[j];
				letterCount++;
				if (letterCount === 5) {
					win();
					return;				
				}
			};
		};
		lettersGuessedArr.push(personGuess);
		lettersGuessed.append(personGuess + " ");
		counter--;
		attemptTitle.innerHTML = "You have this many attempts left: " + counter;
		return;
	};
}

// Records Wins

function win() {
	personGuess = "";
	wins++;
	winNumber.innerHTML = "Wins: " + wins;
	reset();
}

// Master function

function runGame() {
	attemptTitle.innerHTML = "You have this many attempts left: " + counter;
	console.log(randomWord);
	document.onkeyup = function() {
	personGuess = event.key;
	checkGuess();
	};
}

runGame();