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