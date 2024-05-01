const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = ["Superman", "Batman", "Aquaman"];

// marvel_heros.push(dc_heros); // merge array directly
// console.log(marvel_heros);

let heros = marvel_heros.concat(dc_heros); // merge array perfectly
console.log(heros);

let all_heros = [...marvel_heros, ...dc_heros]; // work same as concat but people prefer mostly or used for add multiple array
console.log(all_heros);

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const useable_another_arr = another_arr.flat(Infinity); // to create arr in redable format
console.log(useable_another_arr);

console.log(Array.isArray("Hitesh")); // check is array
console.log(Array.from("Hitesh")); // change to array
console.log(Array.from({ name: "Hitesh" })); // interesting case give empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // to create array by set of  diff element
