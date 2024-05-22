// Lexical scoping

function init() {
  let name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

function outer() {
  let username = "hitesh";
  // console.log("Outer: ", secret); // not get access to this variable
  function inner() {
    let secret = "this is a secret";
    console.log("inner: ", username);
  }
  function inner2() {
    console.log("inner2: ", username);
    // console.log("inner2: ", secret); // not get access to this variable
  }
  inner();
  inner2();
}
outer();
// console.log("Too Outer", username);

// Closures - returen function with lexical scope

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
