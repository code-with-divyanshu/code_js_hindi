let num1 = 300;

if (true) {
  let num1 = 10; // block scoped
  const num2 = 20; // block scoped
  var num3 = 30; // global scoped
}

console.log(num1);
// console.log(num2);
console.log(num3);

// Nested Scope

function one() {
  const username = "Divyanshu";

  function two() {
    const website = "Youtube";
    console.log(username);
  }
  // console.log(website);  // error it's  scoped  ended
  two();
}
one();

if (true) {
  const username = "Ayush";
  if (username === "Ayush") {
    const website = " Youtube";
    console.log(username + website);
  }
  // console.log(website);  // error it's  scoped  ended
}

// console.log(username); // error it's  scoped  ended

//++++++++++++++++ intersiting concept +++++++++++++

console.log(addOne(5));
function addOne(num) {
  return num + 1;
}

console.log(addTwo(5));
const addTwo = function (num) {
  return num + 2;
};
