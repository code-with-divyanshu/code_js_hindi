function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName();

// num1 and num2 is parameters
function addTwoNumbers(num1, num2) {
  // not store data in varaible
  // console.log(num1 + num2);
}

// store data in variable use return
function sumTwoNumbers(num1, num2) {
  return num1 + num2; // after return code is not  excuted
}

addTwoNumbers(2, 3); // 2 and 3 is arguments

const result1 = addTwoNumbers(3, 6);
// console.log("Resul1:", result1);

const result = sumTwoNumbers(4, 5);
// console.log("Result2:", result);

function loginUserMsg(username = "sam") {
  // sam is default value if you don't give any argument
  return `${username} just logged in`;
}

// console.log(loginUserMsg("Divyanshu"));

function calculateCartPrice(...num1) {
  // ... is rest operator now
  return num1;
}

console.log(calculateCartPrice(200, 400, 500)); // rest operator create a array

const user = {
  username: "divyanshu",
  age: 23,
};

function handleObj(anyObj) {
  console.log(`I am ${anyObj.username} and my age is ${anyObj.age}`);
}

// handleObj(user);

handleObj({
  username: "Arjun",
  age: 24,
});

const myArr = [200, 300, 400, 500];

function returnSecondValue(getArr) {
  return getArr[1];
}

// console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200, 156, 400, 344]));
