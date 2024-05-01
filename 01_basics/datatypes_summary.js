// Data Type

// Primitive Data Type

// 7 types :-> String, Number, null, undefined, Boolean, BigInt, Symbol

let firstName = "divyanshu";
let age = 22;
let isLoggedIn = false;
let temp = null;
let work;

const id = Symbol("123");
const anotherid = Symbol("123");

console.log(id === anotherid);

const bigNumber = 214244324242n;

console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof temp);
console.log(typeof work);
console.log(typeof id);
console.log(typeof bigNumber);

// Reference(Non Primitive) Data Type

// Array, Objects, Functions

const heros = ["Saktiman", "Naagraj", "Doga"];

let myObj = {
  name: "divyanshu",
  age: 22,
};

let myFunction = function () {
  console.log("Hello JavaScript");
};

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

// JavaScript is Dynamically typed Language

// to study link

// https://tc39.es/ecma262/#sec-ecmascript-data-types-and-values

// Memory in JavaScript

//Stack (Primitive Data Types),  Heap (Non Primitive Data Types)

let myYoutube = "wouk";

let anotherYoutube = myYoutube;
anotherYoutube = "developer_divyanshu";

console.log(myYoutube);
console.log(anotherYoutube);

let userOne = {
  email: "user@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "user234@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);
