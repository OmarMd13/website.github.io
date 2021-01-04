// Challenge-1:
// alternative and critical way,, coded in "video":
function on_clicks(){
	var y = prompt("what is your birth year?");
	var days = (2020 - y) * 365;
	var h2 = document.createElement("h2");  // for creating a "h2 tag"
	h2.setAttribute("class", "bold_text");  // for giving the "h2 tag" a (class = "bold_text")
	var ans = document.createTextNode("You are " + days + " days old");  // the ans 
	h2.appendChild(ans);  // for adding the ans into the "h1 tag"
	document.querySelector(".result").appendChild(h2);  // for adding the "h2 tag" into the "result div"
}
function reset() {
	document.querySelector(".bold_text").remove();
}

// Note: this system should be used for multitask work,, Because it'll print "the ans" everytime as someone gives his birthyear.. and after clicking reset it'll delete them one by one..

// IMPORTANT: this will be the better method of function if you wanna do multitasking work Or option like "remove Or delete_line Or reset Or erase_line"

// Challenge-2:
function genClick(){
	var image = document.createElement("img");
	image.src = "https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif";  // adding source into "img tag"
	document.querySelector(".gif").appendChild(image);  // adding "img tag" into "gif div"
}

// Challeng-3:
// Main Function--------------------------------------------------------------------
function rpsResult(mySelection){
	//console.log(mySelection); // in html "this" means it'll select the (clicked element) as "mySelection"
	
	var myChoice = mySelection.id;   // make sure to use "id" instead of "class" in Javascript
	// console.log(myChoice);

	// now i have to give a class to the "computer's choice" which will be random.
	var compChoice = ranChoice();
	// console.log(compChoice);

	var result = decideWinner(myChoice, compChoice);
	// console.log(result);

	var popUp = announce(result);
	// console.log(popUp);

	var decorated_result = frontEnd(myChoice, popUp, compChoice);
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
function decideWinner(x, y){
	var data = {
		'rock': {'scissors': 'win', 'rock': 'draw', 'paper': 'lose'},
		'paper': {'rock': 'win', 'paper': 'draw', 'scissors': 'lose'},
		'scissors': {'paper': 'win', 'scissors': 'draw', 'rock': 'lose'},
	};
	var x_score = data[x][y];  // 'x': value of 'y'
	var y_score = data[y][x];  // 'y': value of 'x'
	var list = [x_score, y_score];
	return list;  // you can write this (  return [....]  )
}
// console.log(decideWinner("rock", "paper"));
// console.log(decideWinner("paper", "scissors"));
// console.log(decideWinner("paper", "paper"));

// NOTE: simple way to get that "json" is,,  if [x-person] chooces "rock" & [y-person] choice matched by one of the object's "property" of that(rock) then the 'Result of [x-person] score' will be the "value" of that "property".

// Function for "var popUp"---------------------------------------------------------------------------
function announce([x, y]){
	if (x === "win"){
		var show = {'announce': "You Win!!", "color": "green",};
		return show;    // (  return {....}  )
	}
	else if (x === "draw"){
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
function frontEnd(x, y, z){
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

	myChoiceDiv.innerHTML = "<img src = '" + imageData[x] + "'/>";
	popUpDiv.innerHTML = "<h1 style= 'color:" + y["color"] + ";'>" + y["announce"] + "</h1>";
	compChoiceDiv.innerHTML = "<img src = '" + imageData[z] + "'/>";

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