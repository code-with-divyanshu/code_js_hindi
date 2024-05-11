const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = myNumbers.map((num) => num + 10);
console.log(newNumbers);

// Chaning -> use one or more method at one time

const newNums = myNumbers
  .map((num) => num * 10) // return new array all values multiply by 10
  .map((num) => num + 1) // return new array add 1 to first map arrat all values
  .filter((num) => num > 40); // return new array vales greater than 40

console.log(newNums);
