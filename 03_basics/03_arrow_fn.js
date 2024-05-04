// ********************* This ************

const user = {
  username: "Divyanshu",
  age: 22,

  welcomeMsg: function () {
    console.log(`${this.username} Welcome to Website`);
    console.log(this);
  },
};

user.welcomeMsg();
user.username = "Ayush";
user.welcomeMsg();

console.log(this); // this refer to empty object in node enviornment or window in browser's v8 engine

// ********************* Arrow Function ************

// function chai() {
//   let username = "Divyanshu";
//   console.log(this.username); // in function this keyword not used
// }

// chai();

// const chai = function () {
//   let username = "Divyanshu";
//   console.log(this.username);
// };

// chai();

const chai = () => {
  let username = "Divyanshu";
  console.log(this);
};

// chai();

// +++++++++++ typed arrow function +++++++

// Basic Arrow function

const addTwoNum = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwoNum(4, 6));

// Impilicit Arrow function

const sumTwoNum = (num1, num2) => num1 + num2; // not use return keyword
// const sumTwoNum = (num1, num2) => (num1 + num2); // use in varrious time

const myObjFn = (num1, num2) => ({ username: "divyanshu" });

console.log(sumTwoNum(4, 6));
console.log(myObjFn());

const myArr = [2, 4, 5, 6];

myArr.forEach(() => {});
