// for of

// for (const iterator of object) {}  syntax

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = " Hello Javascript";
for (const greet of greetings) {
  console.log(greet);
}

// Map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America");
map.set("JAP", "Japan");

// console.log(map);

// for of loop in Map

for (const key of map) {
  console.log(key);
} // print whole array

for (const [key, value] of map) {
  console.log(key, ":-", value);
} // [] is for to print key or value saperately

const myObject = {
  game1: "NFS",
  game2: "PUBG",
};

// for of loop in Object

// for (const [key, value] of myObject) {
//   console.log(key, ":-", value);
// }
// for of loop not works on object
