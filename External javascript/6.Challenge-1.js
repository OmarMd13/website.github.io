function clicks(){
    var x = prompt("What is your birth year?");
    var day = (2020 - x) * 365;
    document.querySelector(".ans").innerHTML = "you are " + day + " days old";
}

// Note: use "innerHTML" inside the function while the function will be used for "onclick".. you can't use options like "reset or delete or remove" with this method of function.

function reset1() {
	document.querySelector(".ans").removeTextNode();
}

// IMPORTANT: don't use this method of function while working with option like "remove Or reset Or remove"