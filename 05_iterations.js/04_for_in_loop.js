const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  py: "Python",
};

// for (const key in object) {} syntax

// for in loop in object

// to print keys only
for (const key in myObject) {
  console.log(key);
}

// to print values of keys
for (const key in myObject) {
  console.log(myObject[key]);
}

// to print values of keys
for (const key in myObject) {
  console.log(key, "for", myObject[key]);
}

// for in loop in array

const myArr = ["js", "cpp", "rb", "py", "html", "css"];

// to print keys only
for (const key in myArr) {
  console.log(key);
}

// to print values of keys
for (const key in myArr) {
  console.log(myArr[key]);
}

// to print values of keys
for (const key in myArr) {
  console.log(key, ":", myArr[key]);
}

// for in loop for Map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("JAP", "Japan");

for (const key in map) {
  console.log(key);
}
// for of loop not works on Map
