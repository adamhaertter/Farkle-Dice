var diceArr = [];
var bank = 0;
var turn = 1;

function initializeDice(){
	for(i = 0; i < 6; i++){
		diceArr[i] = {};
		diceArr[i].id = "die" + (i + 1);
		diceArr[i].value = i + 1;
		diceArr[i].clicked = 0;
	}
	turn = 1;
}

/*Rolling dice values*/
function rollDice(){
	for(var i=0; i < 6; i++){
		if(diceArr[i].clicked === 0){
			diceArr[i].value = Math.floor((Math.random() * 6) + 1);
		}
	}
	updateDiceImg();

	// Score can be banked once the dice have been rolled
	document.querySelector('.bank').disabled = false;

	calculateScore();

}

/*Updating images of dice given values of rollDice*/
function updateDiceImg(){
	var diceImage;
	for(var i = 0; i < 6; i++){
		diceImage = "images/" + diceArr[i].value + ".png";
		document.getElementById(diceArr[i].id).setAttribute("src", diceImage);
	}
}

function diceClick(img){
	var i = img.getAttribute("data-number");

	img.classList.toggle("transparent");
	if(diceArr[i].clicked === 0){
		diceArr[i].clicked = 1;
	}
	else{
		diceArr[i].clicked = 0;
		alert("No die should be rerolled after being set aside without restarting or banking your score. \n\n The die will be untoggled, but please don't cheat!");
	}

}

function calculateScore() {
	var score = 0;
	var isFullRoll = true;

	var counts = {};

	// Count number of faces per die, unclicked only
	for(var i = 0; i < 6; i++) {
		if(diceArr[i].clicked === 0) {
			var face = diceArr[i].value;
			counts[face] = (counts[face] || 0) + 1;
		} else {
			isFullRoll = false;
		}
	}

	// Score based on face counts, assuming we want the highest possible score
	for(var face in counts) {
		var count = counts[face];

		// Three of a kind scores:
		if(count >= 3) {
			if(face == 1)
				score += 1000;
			else
				score += (face * 100);
			count -= 3; // Reduce count to exlude double-counting dice
		}

		// Score single 5s
		if(face == 5 && count > 0)
			score += count * 50;
		
		// Score single 1s
		if(face == 1 && count > 0)
			score += count * 100
		
	}

	var scoreCard = document.querySelector('.score');
	
	if(score <= 0) {
		// Rolled a farkle, game over.
		scoreCard.innerHTML = "Farkle!";
		document.querySelector('.roll').disabled = true;
		document.querySelector('.bank').disabled = true;
	} else if(isFullRoll) {
		// If all 6 are rolled, only display new score. (Don't tally restarts)
		scoreCard.innerHTML = score;
	} else {
		// Display score from previous roll + new score
		scoreCard.innerHTML = parseInt(scoreCard.innerHTML) + score;
	}
}

function reactivateDice() {
	var diceImages = document.querySelectorAll('.dice img');
	for (var i = 0; i < diceImages.length; i++) {
  		diceImages[i].classList.remove('transparent');
	}
}

// Reset the game board
function resetGame() {
	initializeDice();
	updateDiceImg();
	
	document.querySelector('.score').innerHTML = 0;
	document.querySelector('.roll').disabled = false;
	document.querySelector('.bank').disabled = false;

	reactivateDice();

	var turnCounter = document.querySelector('.turns');
	turnCounter.innerHTML = "You have made it to Round " + turn;

	bank = 0;
	document.querySelector('.bankScore').innerHTML = "Banked score: " + bank;
}

function bankScore() {
	// Add current score to total
	var scoreCard = document.querySelector('.score');
	bank += parseInt(scoreCard.innerHTML) || 0;
	scoreCard.innerHTML = bank;
	reactivateDice();

	document.querySelector('.bankScore').innerHTML = "Banked score: " + bank;

	turn++;
	var turnCounter = document.querySelector('.turns');
	turnCounter.innerHTML = "You have made it to Round " + turn;

	// Disable banking score until at least one roll is made
	document.querySelector('.bank').disabled = true;
}
