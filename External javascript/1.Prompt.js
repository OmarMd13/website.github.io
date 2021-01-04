// without storing this data
/*
prompt("what is your age?: ");
*/

// storing data into "x"
let x = prompt("what's your name?");
console.log("name: " + x);


//-----------------------------------------------------------------------------------------------

// prompt using function:
function prmt(name){
	console.log("Hello " + name);  // console log  works as return
}
let y = prompt("What's your nickname?");
prmt(y);

//---------------------------------------------------------------------------------------------

// prompt using "if else condition":
let a = prompt("what is your age?");
if (a < 18){
	console.log("You are still a kid, sorry not allowed");
}
else{
	console.log("you are welcome Sir");
}
// applying "if else" using function:
function if_else(profession){
	if (profession == "Freelancer" || "freelancer"){
		console.log("You are welcome here sir!");
	}
	else{
		console.log("Sorry sir! only freelancer's are allowed");
	}
}
let b = prompt("What's your profession?");
if_else(b);