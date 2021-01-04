let a = "banana\nkola";   // new line 
let b = "guava   \n    peyara"  // new line using space
console.log(a);
console.log(b);

//-------------------------------------------------------------------------------------------

// Use of Strings (some common methods):
let fruit = "Apple";

console.log(fruit.length);   // total letters

console.log(fruit.indexOf("pp"));

console.log(fruit.slice(2));     // works as [2 :] of python

console.log(fruit.slice(2, 4));  // works as [2 : 4] of python 

console.log(fruit.replace("pp", "bb")); 

console.log(fruit.toUpperCase());

console.log(fruit.toLowerCase());

console.log(fruit.charAt(3));    // works as "fruit[3]"

console.log(fruit[3]);


let fruits = "apple, banana, orange";

console.log(fruits.split(""));  

console.log(fruits.split(" "))

console.log(fruits.split(","));

console.log(fruits);