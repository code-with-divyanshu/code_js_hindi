const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter method to return arr into new variable
const newNums = myNums.filter((num) => {
  return num > 4;
});

console.log(newNums);
