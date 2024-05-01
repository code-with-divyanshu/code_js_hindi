const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

// Numbers Method

console.log(balance.toString().length);
console.log(typeof balance);

const otherNumber = 23.8695;
console.log(otherNumber.toPrecision(3));

const hundreds = 100100;
console.log(hundreds.toLocaleString("en-IN"));

// *************+++++++++ Maths ++++++++++***************

// console.log(Math);
console.log(Math.abs(-4)); //change value to abstolute - to +
console.log(Math.round(6.8)); //round value
console.log(Math.ceil(6.3)); //round upper value
console.log(Math.floor(6.8)); // round lower value
console.log(Math.sqrt(64)); // to get square root of value
console.log(Math.min(4, 3, 6, 23, 7)); // to get min value in array
console.log(Math.max(4, 3, 6, 23, 7)); // to get max value in array
console.log(Math.random()); // to get random numbers between 0 to 1
console.log(Math.random() * 10 + 1); // to get random numbers between 0 to 1
console.log(Math.floor(Math.random() * 10 + 1)); // to get random numbers between 0 to 1

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
