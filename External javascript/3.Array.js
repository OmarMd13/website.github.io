// Use of Array (some common methods):
var more_fruits = ["banana", "orange", "guava", "apple"];  // alternative: var more_fruits = new Array();

console.log(more_fruits);

console.log("to string", more_fruits.toString());

console.log(more_fruits.join(" * "));

console.log(more_fruits.pop(), more_fruits);  // removed last item then printed the array;

console.log(more_fruits.push("papaya"), more_fruits); // added last item,, it's (append) in python

console.log(more_fruits[more_fruits.length] = "potato", more_fruits); // works same as (push)

console.log(more_fruits.shift(), more_fruits);  // removed first item then printed array

console.log(more_fruits.unshift("carrot"), more_fruits);  // added first item

// concatenation and some other methods:
var vegetables = ["asparagus", "tomato", "broccoli"];

var allGroceries = more_fruits.concat(vegetables);  // concatenation of the Arrays.

var allGroceries1 = vegetables.concat(more_fruits);

console.log(allGroceries);

console.log(allGroceries1);

console.log(allGroceries.slice(4, allGroceries.length - 1));  // works same as [4 : len() -1] of python

console.log(allGroceries.reverse());

console.log(allGroceries.sort());   // don't work better with Strings

// using sort with numbers
var numbers = [2, 34, 5, 6, 77, 56, 7, 765, 6, 575, 56, 565, 57, 76, 23];

console.log(numbers.sort(function(a, b){return a - b}));  // sorting the "numbers" Ascending
console.log(numbers.sort(function(x, y){return y - x}));  // sorting the "numbers" Descending

// adding items using "for loop":
var total = [];  //alternative:  var total = new Array();
for (var i = 0; i <= 10; i += 1){
	total.push(i);
	console.log(total);   // try 1
}

var total1 = [];
for (var i = 0; i <= 15; i += 1){
	total1.push(i);
}
console.log(total1);      // try 2