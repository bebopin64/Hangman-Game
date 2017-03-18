
// Define Variables ----------------------------------------------------------

var hangmanWords = [
	"aardvark","abalones","anteater","antelope","bushbaby","capuchin",
	"chipmunk","elephant","hedgehog","kangaroo","mandrill","marmoset",
	"mongoose","platypus","porpoise","reindeer","squirrel"];
var randomNumber = Math.floor(Math.random() * 17);
var randomWord = hangmanWords[randomNumber];
var counter = 20;
var lettersGuessedArr = [];
var lettersGuessed = document.getElementById('lettersGuessed');
var lettersClear = document.querySelector('#lettersGuessed');
var guessed = document.getElementsByClassName('letterHolder');
var attemptTitle = document.querySelector('.guesses');
var winNumber = document.querySelector('.wins');
var lossNumber = document.querySelector('.losses');
var personGuess = "";
var beenGuessed = 0;
var letterCount = 0;
var wins = 0;
var losses = 0;
var uhoh = new Audio("assets/sounds/uhoh.mp3");
var woosh = new Audio("assets/sounds/woosh.mp3");

// Create Functions ------------------------------------------------------------

// Resets the game after win/loss

function reset() {
	randomNumber = Math.floor(Math.random() * 17);
	randomWord = hangmanWords[randomNumber];
	letterCount = 0;
	counter = 20;
	lettersGuessedArr = [];
	for (var j=0;j<randomWord.length;j++) {
		guessed[j].textContent = "_";
	}
	lettersClear.innerHTML = "";
	attemptTitle.innerHTML = "Guesses left: " + counter;
	runGame();
}

// Checks user input for proper handling 

function checkGuess() {
	// if user out of guesses - resets game
	for (var i=0;i<lettersGuessedArr.length;i++) {
		if (personGuess === lettersGuessedArr[i]) {
			beenGuessed = 1;
		}
	}
	if (beenGuessed === 1) {
		beenGuessed = 0;
		runGame();
	} else {
		for (var j=0;j<randomWord.length;j++) {
			if (personGuess === randomWord[j]) {
				lettersGuessedArr.push(personGuess);
				guessed[j].textContent = randomWord[j];
				letterCount++;
				if (letterCount === 8) {
					win();
					return;				
				}
			}
		}
		if (counter === 1) {
			uhoh.play();
			losses++;
			lossNumber.innerHTML = "Losses: " + losses;
			reset();
			return;
		}
		lettersGuessedArr.push(personGuess);
		lettersGuessed.append(personGuess + " ");
		counter--;
		attemptTitle.innerHTML = "Guesses left: " + counter;
		return;
	}
}

// Records Wins

function win() {
	woosh.play();
	personGuess = "";
	wins++;
	winNumber.innerHTML = "Wins: " + wins;
	reset();
}

// Master function

function runGame() {
	attemptTitle.innerHTML = "Guesses left: " + counter;
	console.log(randomWord);
	document.onkeyup = function() {
		personGuess = event.key;
		checkGuess();
	};
}

// Run the game

runGame();