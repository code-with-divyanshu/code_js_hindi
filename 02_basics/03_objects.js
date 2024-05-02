// singleton
const tinderUser = new Object();
console.log(tinderUser);

// objects literals
const mySym = Symbol("key1");

const jsUser = {
  name: "Divyanshu",
  "full name": "Divyanshu Bartwal",
  [mySym]: "India", // use squre bracet to refer symbol
  age: 23,
  location: "Dehradun",
  email: "divyanshubartwal67@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday"],
};

console.log(jsUser.email); // mostly  use
console.log(jsUser["email"]); // some spacial case use
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.isLoggedIn = true;
console.log(jsUser.isLoggedIn);

// Object.freeze(jsUser); // to stop changes in objects
jsUser.email = "karan@gmail.com";
console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello Js User");
};

jsUser.greetingTwo = function () {
  console.log(`Hello Js User, ${this.name}`); // for refer value
};
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
