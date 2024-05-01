const name = "divyanshu ";
const repoCount = 15;

console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// use this template literal method to  add any String

const gameName = new String("Divyanshu Bartwal");

//String Method

console.log(gameName[2]); //Indices
console.log(gameName.__proto__); // prototypes
console.log(gameName.length); // length
console.log(gameName.toLowerCase()); // lowercase
console.log(gameName.toUpperCase()); // upercase
console.log(gameName.charAt(3)); // position of charc
console.log(gameName.indexOf("v")); // index of char

//cut char

let newStr = gameName.substring(0, 4);
console.log(newStr);

let anotherStr = gameName.slice(-15, 4);
console.log(anotherStr);

let newString = "    divyanshu   ";
console.log(newString.trim()); // remove Space

const url = "file:///C:/Users/Divyanshu%20Bartwal/battery-report.html";

console.log(url.replace("%20", "-")); // replace char

// check is includes string
console.log(url.includes("Divyanshu"));
console.log(url.includes("Kran"));

let str = "divyanshu-batwal-malkoti";
console.log(str.split("-")); //split strings into array

// Learn javaScript String method from
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods
