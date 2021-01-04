var person = {
	name: "Omar",
	nickname: "Faisal",
	age: 18,
	profession: "student",
};
console.log(person.name);
console.log(person.profession);

// using Function:
var person1 = {
	name1: "Omar",
	nickname1: "Faisal",
	age1: 18,
	profession1: "student",
	totalInfo: function(){
		return this.name1 + "\n"  + this.nickname1 + "\n" + this.age1 + "\n" + this.profession1;
	},  // this = x,, when (x.totalInfo())... it works as "self" in python
};
console.log(person1.totalInfo());

// switch and case:
/* 
0 --> sunday       --> weekend
1 --> monday    --> weekday
2 --> tuesday   --> weekday
3 --> wednesday --> weekday
4 --> thursday  --> weekday
5 --> friday       --> weekend
6 --> saturday     --> weekend
*/
switch(6){
	case(0):   // it's working like "if condition"
		say = "weekend";
		break;
	case(5):   // it's working like "elif condition"
		say = "weekend";
		break;
	case(6):
		say = "weekend";
		break;
	default:   // it's working like "else condition"
		say = "weekday";
		break;
}
console.log(say);