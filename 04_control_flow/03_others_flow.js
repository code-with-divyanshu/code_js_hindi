// truthy or falsy values

const userEmail = "divyanshu@gmail.com";

if (userEmail) {
  console.log("Got User Email");
} else {
  console.log("Don't have User Email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

const user = [];
if (user.length === 0) {
  console.log("Array is Empty");
}

const myObject = {};
if (Object.keys(myObject).length === 0) {
  console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null, undefined

let val1;
// val1 = 5 ?? 10; // val1 = 5
// val1 = null ?? 10; // val1 = 10
// val1 = undefined ?? 12; // val1 = 12
val1 = null ?? 10 ?? 20; //val1 = 10
// val1 = null ?? undefined ?? 20; //val1 = 20

console.log(val1);

// Terinary Operator

// condition ? true : false // syntax

const marks = 300;
marks > 200 ? console.log("Pass") : console.log("Fail");

// * nullish coalescing operator and terinary operator are different
