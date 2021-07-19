function sayHi(name){
    console.log("Hi " + name);
}
sayHi('Gary');

// with ES5
var names = "Jhonny Gary";
console.log(names);
names = "jhonny";
// you can change it
// with ES6
const name1= "Gary";
console.log(name1);
//name1 = "Jhonny"; //you can't do this because const is only for read
let years = 19;
console.log(years);
years = 20;
// let is like var
// arrow functions
// in ES5
const year = [2000, 2005, 2008, 2012];
var old = year.map(function(el){
    return 2021 - el;
})
console.log(old);
// in ES6
let old1 = year.map((el) => {
    return 2021-el;
}) // if its only one line (el => 2021-el) can be applyed
console.log(old1);
