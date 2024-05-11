const myNums = [1, 2, 3, 4];

const numTotal = myNums.reduce((acc, currVal) => {
  console.log(`acc: ${acc} and currVal: ${currVal}`);
  return acc + currVal;
}, 0);

// acc = accumulator , currVal = currentVale , 0 = initialValue

console.log(numTotal);

// another example

const courseCart = [
  {
    itemName: "js course",
    price: 2999,
  },

  {
    itemName: "py course",
    price: 1999,
  },

  {
    itemName: "mobile dev course",
    price: 5999,
  },

  {
    itemName: "web dev course",
    price: 4999,
  },

  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = courseCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalPrice);
