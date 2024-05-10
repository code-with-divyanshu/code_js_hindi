// if or else statement

const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);  // control flow is block scoped

// *** Shorthand notation for if  statement

const balance = 1000;

if (balance > 500) console.log("test");

// if, else if or else statement
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 700) {
  console.log("less than 700");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1100");
}

const userLoggedIn = true;
const upiId = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && upiId) {
  console.log("Allow to buy something");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
