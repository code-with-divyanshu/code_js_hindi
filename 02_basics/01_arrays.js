//arrays

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Spiderman", "Deadpool", "Saktiman"];

const myArr1 = new Array(1, 2, 3, 4);

console.log(myArr);
// console.log(myHeros);
// console.log(myArr1);

// Array Methods
myArr.push(6); //add element to the end
console.log(myArr);
myArr.pop(); // remove last element
console.log(myArr);
myArr.unshift(0); //add to start
console.log(myArr);
myArr.shift(); //delete first element
console.log(myArr);
console.log(myArr.includes(1)); // to check is element present
console.log(myArr.indexOf(5)); //to check element index

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

// slice or splice

console.log("A", myArr);

const myNArr1 = myArr.slice(1, 3); // return a piece of the array or not change original array
console.log("B", myArr);
console.log(myNArr1);

const myNArr2 = myArr.splice(1, 3); // return a piece of the array or  change original array
console.log("C", myArr);
console.log(myNArr2);
