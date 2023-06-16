var diceArr = [];

function initializeDice(){
	for(i = 0; i < 6; i++){
		diceArr[i] = {};
		diceArr[i].id = "die" + (i + 1);
		diceArr[i].value = i + 1;
		diceArr[i].clicked = 0;
	}
}

/*Rolling dice values*/
function rollDice(){
	for(var i=0; i < 6; i++){
		if(diceArr[i].clicked === 0){
			diceArr[i].value = Math.floor((Math.random() * 6) + 1);
		}
	}
	updateDiceImg();
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
		diceArr[i].clicked == 1;
	}
	else{
		diceArr[i].clicked == 0;
	}

}

function calculateScore() {
	var score = 0;

	var counts = {};

	for(var i = 0; i < 6; i++) {
		var face = diceArr[i].value;
		counts[face] = (counts[face] || 0) + 1;
	}

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

	
	console.log(JSON.stringify(counts));
	var scoreCard = document.querySelector('.score');
	scoreCard.innerHTML = ""+score;
}