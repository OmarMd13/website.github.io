// Challenge-1:
// alternative and critical way,, coded in "video":
function on_clicks(){
	var y = prompt("what is your birth year?");
	var days = (2020 - y) * 365;
	
	var h2 = document.createElement("h2");  // for creating a "h2 tag"
	h2.setAttribute("class", "bold_text");  // for giving the "h2 tag" a (class = "bold_text")

	var ans = document.createTextNode("You are " + days + " days old");  // the ans 
	
	h2.appendChild(ans);  // for adding the ans into the "h1 tag"
	document.querySelector(".result").appendChild(h2);// for adding the "h2 tag" into the "result div"
}
function reset() {
	document.querySelector(".bold_text").remove();
}

// Note: this system should be used for multitask work,, Because it'll print "the ans" everytime as someone gives his birthyear.. and after clicking reset it'll delete them one by one..

// IMPORTANT: this will be the better method of function if you wanna do multitasking work Or option like "remove Or delete_line Or reset Or erase_line"

// Challenge-2:
function genClick(){
	var image = document.createElement("img");
	image.src = "GIF/cat.webp";  // adding source into "img tag"
	document.querySelector(".gif").appendChild(image);  // adding "img tag" into "gif div"
}

// Challeng-3:
// Main Function--------------------------------------------------------------------
function rpsResult(mySelection){
	//console.log(mySelection); // in html "this" means it'll select the (clicked element) as "mySelection"
	
	const myChoice = mySelection.id;   // make sure to use "id" instead of "class" in Javascript
	// console.log(myChoice);

	// now i have to give a class to the "computer's choice" which will be random.
	const compChoice = ranChoice();
	// console.log(compChoice);

	let result = winnerDecide(myChoice, compChoice);
	// console.log(result);

	let popUp = announce(result);
	// console.log(popUp);

	let decorated_result = frontEnd(myChoice, popUp, compChoice);
}

// Function for "var compChoice"------------------------------------------------------------------------
// let's create ramdom numbers and make it choice the index of list ramdomly
function ranChoice(){
	x = Math.floor(Math.random() * 3);
	var list = ["rock", "paper", "scissors"];
	var choice = list[x];
	return choice;  // you can write this (  return [.....][x]  )
}

// Function for "var result"--------------------------------------------------------------------------
// function using "Json" (same as object):
function winnerDecide(x_player, comp){
	var data = {
		'rock': {'scissors': 'win', 'rock': 'draw', 'paper': 'lose'},
		'paper': {'rock': 'win', 'paper': 'draw', 'scissors': 'lose'},
		'scissors': {'paper': 'win', 'scissors': 'draw', 'rock': 'lose'},
	};
	var player_score = data[x_player][comp];  // 'x_player': value of 'comp'
	var comp_score = data[comp][x_player];  // 'comp': value of 'x_player'
	var list = [player_score, comp_score];
	return list;  // you can write this (  return [....]  )
}
// console.log(decideWinner("rock", "paper"));
// console.log(decideWinner("paper", "scissors"));
// console.log(decideWinner("paper", "paper"));

// NOTE: simple way to get that "json" is,,  if [x-person] chooces "rock" & [y-person] choice matched by one of the object's "property" of that(rock) then the 'Result of [x-person] score' will be the "value" of that "property".

// Function for "var popUp"---------------------------------------------------------------------------
function announce([playerScore, compScore]){
	if (playerScore === "win"){
		var show = {'announce': "You Win!!", "color": "green",};
		return show;    // (  return {....}  )
	}
	else if (playerScore === "draw"){
		var show1 = {"announce": "You Tied", "color": "yellow",}
		return show1;   // (  return {....}  )
	}
	else {
		var show2 = {"announce": "You Lose", "color": "red"}
		return show2;   // (  return {....}  )
	}
}

//---------------------------------Back End work Finished & Now Front End----------------------------------

// Function for "var decorated_result"--------------------------------------------------------------------
function frontEnd(player, popDiv, comp){
	var imageData = {
		"rock": document.querySelector("#rock").src,  // you can use links directly here
		"paper": document.querySelector("#paper").src,
		"scissors": document.querySelector("#scissors").src,
	}
	// removing all the "img div"
	document.querySelector("#rock").remove();
	document.querySelector("#paper").remove();
	document.querySelector("#scissors").remove();

	// let's create "divs for Front End effects"
	var myChoiceDiv = document.createElement("div");
	var popUpDiv = document.createElement("div");
	var compChoiceDiv = document.createElement("div");

	myChoiceDiv.innerHTML = "<img src = '" + imageData[player] + "'/>";
	popUpDiv.innerHTML = "<h1 style= 'color:" + popDiv["color"] + ";'>" + popDiv["announce"] + "</h1>";
	compChoiceDiv.innerHTML = "<img src = '" + imageData[comp] + "'/>";

	document.querySelector("#game_result").appendChild(myChoiceDiv);
	document.querySelector("#game_result").appendChild(popUpDiv);
	document.querySelector("#game_result").appendChild(compChoiceDiv);
}

// Challenge-4:
// first i have to copy all the colors of the buttons so that we can reset them.
var all_buttons = document.getElementsByTagName("button");
// console.log(all_buttons);

var copyAll_buttons = [];  // stored Or copied all the classes of the buttons.
for (let i = 0; i < all_buttons.length; i += 1){
	copyAll_buttons.push(all_buttons[i].classList[0]);   // only classes
}
// console.log(copyAll_buttons);

/*
var copyAll_buttonsP = [];
for (let i = 0; i < all_buttons.length; i += 1){
	copyAll_buttonsP.push(all_buttons[i].classList);  // class & values together
}
console.log(copyAll_buttonsP);
*/

// Main Function:
function changeColor(myClick){
	// console.log(myClick.value);

	if (myClick.value === "red"){
		return redColor();
	}
	else if (myClick.value === "green"){
		return greenColor();
	}
	else if (myClick.value === "reset"){
		return doReset();
	}
	else if (myClick.value === "random"){
		return randomChoice();
	}
}

// Funcion for "return redColor()":
function redColor(){
	for (i = 0; i < all_buttons.length; i += 1){
		all_buttons[i].classList.remove(all_buttons[i].classList[0]);  //removing class from class & value
		all_buttons[i].classList.add("red");  // adding "class = 'red'" with the value
	}
}

// Function for "return greenColor()":
function greenColor(){
	for (i = 0; i < all_buttons.length; i += 1){
		all_buttons[i].classList.remove(all_buttons[i].classList[0]);
		all_buttons[i].classList.add("green");
	}
}

// Function for "return doReset()"
function doReset(){
	for (i = 0; i < all_buttons.length; i += 1){
		all_buttons[i].classList.remove(all_buttons[i].classList[0]);
		all_buttons[i].classList.add(copyAll_buttons[i]);
	}
}

// Function for "return randomChoice()"
function randomChoice(){
	for (i = 0; i < all_buttons.length; i += 1){
		let allColors = ["blue", 'red', 'yellow', 'green'];
		let randomNums = Math.floor(Math.random() * allColors.length);

		all_buttons[i].classList.remove(all_buttons[i].classList[0]);
		all_buttons[i].classList.add(allColors[randomNums]);
	}
}




// Challenge-5:
// at first let's store all information about "you, dealer, cards" into (Json Or Object):
let gameData = {
	"you": {"scoreSpan": "#your_score", "div": "#cards1", "score": 0,},
	"dealer": {"scoreSpan": "#dealer_score", "div": "#cards2", "score": 0,},
	"cards": ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "K", "A", "Q",],
	"cards_score": {"2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "10": 10, "K": 10, "J": 10, "Q": 10, "A": [1, 11],},

// let's make a storage for counting "win, lose, draw":
	"wins": 0,
	"loses": 0, 
	"draws": 0,
// let's create a storage for watching on is the button clicked or not
	"standClick": false,  // means not clicked
	"stand_clickWork": false,  // means activated(you can click the stand button, it'll work)
}

// let's add some constant variables:
const _you = gameData["you"];
const _dealer = gameData["dealer"];
const hitSound = new Audio("Sounds/swish.m4a");  // adding sound for "hit button"
const winSound = new Audio("Sounds/cash.mp3");
const loseSound = new Audio("Sounds/aww.mp3");

// let's add [onclick = " "] attribute into the 'html' different way:
document.querySelector("#hitBtn").addEventListener('click', hit_Btn);  // (onclick = "hit_Btn()")
document.querySelector("#dealBtn").addEventListener('click', deal_Btn); // (onclick = "deal_Btn()")
document.querySelector("#standBtn").addEventListener("click", stand_Btn); // (onclick = "stand_Btn()")

// Let's create a Function for "hit_Btn()"
function hit_Btn(){
	if (gameData["standClick"] === false){
		let randomCards = randomIndex();
		// console.log(randomCards);

		showCard(randomCards, _you);
		updateScore(randomCards, _you);
		gameData["stand_clickWork"] = true;
	}

	// NOTE: if u wanna use multiple functions in a single function then u should'nt use "return"
}

// let's create Promise Function & async Function for "stand_Btn()":
function wait(ms){  // this function used for time delay for each loop in "while loop"
	return new Promise(resolve => setTimeout(resolve, ms));
}
async function stand_Btn(){
	if (gameData["stand_clickWork"] === true){  // made this for single click systm for the "stand button"
		
		gameData["stand_clickWork"] = false;

		while (_dealer["score"] < 16){
			let randomCards = randomIndex();
			showCard(randomCards, _dealer);
			updateScore(randomCards, _dealer);
			await wait(800);
		}

		decideWinner();
		gameData["standClick"] = true;  // means the button is clicked
	}
}

// let's create a Function for "let randomCards":
function randomIndex(){
	let ranIn = Math.floor(Math.random() * gameData["cards"].length);
	return gameData["cards"][ranIn];
}

// let's create a Function for "return showCard()":
function showCard(ranCard, x_player){
	if (x_player["score"] <= 21){
		let imgDiv = document.createElement("img");
		imgDiv.src = `Images/${ranCard}.png`;
		document.querySelector(x_player["div"]).appendChild(imgDiv);
		hitSound.play();
	}
}

// let's create a Function for "deal_Btn()":
function deal_Btn(){
	if (gameData["standClick"] === true && _dealer["score"] > 15){
	// for "divs of cards":
		let cards1_all_Img = document.querySelector("#cards1").querySelectorAll("img");
		// console.log(cards1_all_Img);

		let cards2_all_Img = document.querySelector("#cards2").querySelectorAll("img");
		// console.log(cards2_all_Img);

		for (let i = 0; i < cards1_all_Img.length; i += 1){
			cards1_all_Img[i].remove();
		}
		for (let i = 0; i < cards2_all_Img.length; i += 1){
			cards2_all_Img[i].remove();
		}

	// for storage of scores:
		_you["score"] = 0;
		_dealer["score"] = 0;

	// for "spandivs of scores":
		document.querySelector(_you["scoreSpan"]).textContent = 0;
		document.querySelector(_dealer["scoreSpan"]).textContent = 0;

		document.querySelector(_you["scoreSpan"]).style.color = "white";
		document.querySelector(_dealer["scoreSpan"]).style.color = "white";

		document.querySelector("#popUPspan").textContent = "Let's play";
		document.querySelector("#popUPspan").style.color = "black";

	// for buttons click:
		gameData["standClick"] = false;
		gameData["stand_clickWork"] = false;
	}
}

/*
you can change any text from a "span div":
document.querySelector("#your_score").textContent = 30;
document.querySelector("#your_score").textContent = 50;
*/

function updateScore(ranCard, x_player){
	if (ranCard === "A"){
		if (x_player["score"] + gameData["cards_score"][ranCard][1] <= 21){
			 x_player["score"] += gameData["cards_score"][ranCard][1];
		}
		else{
			 x_player["score"] += gameData["cards_score"][ranCard][0];
		}
	}
	else{
		 x_player["score"] += gameData["cards_score"][ranCard];
	}

// showing the updated scores into "spandiv of score"
	if (x_player["score"] > 21){
		 document.querySelector(x_player["scoreSpan"]).textContent = "Blast!!";
		 document.querySelector(x_player["scoreSpan"]).style.color = "red"; 
	}
	else{
		document.querySelector(x_player["scoreSpan"]).textContent = x_player["score"];
	}

// NOTE: don't use "return" if u want to give output multiple things in a function
}

// let's Decide who is the winner:
function decideWinner(){
	let winner;

	if (_you["score"] <= 21){
		if (_you["score"] > _dealer["score"] || (_dealer["score"] > 21)){
			winner = _you;
		}
// NOTE: make sure to use conditions first which is much important

		else if (_you["score"] < _dealer["score"]){
			winner = _dealer;
		}
		else if (_you["score"] === _dealer["score"]){
			winner = "Draw";
		}
	}
	else if (_you["score"] > 21 && _dealer["score"] > 21){
		winner = "Draw";
	}
	else{
		winner = _dealer;
	}

// NOTE: if u wanna use "a variable" multiple times u should declare that variable at the beginning

// Let's show the decision into the "spandiv of let's play & score table":
	if (winner === _you){
		document.querySelector("#popUPspan").textContent = "You Win!!";
		document.querySelector("#popUPspan").style.color = "#1EC61E";
		winSound.play();

		let scoreTableWin = gameData["wins"] += 1;
		document.querySelector("#winSpan").textContent = scoreTableWin;
	}
	else if (winner === _dealer){
		document.querySelector("#popUPspan").textContent = "You Lose";
		document.querySelector("#popUPspan").style.color = "red";
		loseSound.play();

		let scoreTableLose = gameData["loses"] += 1;
		document.querySelector("#loseSpan").textContent = scoreTableLose;
	}
	else if (winner === "Draw"){
		document.querySelector("#popUPspan").textContent = "You Drew";
		document.querySelector("#popUPspan").style.color = "black";

		let scoreTableDraw = gameData["draws"] += 1;
		document.querySelector("#drawSpan").textContent = scoreTableDraw;
	}
}
