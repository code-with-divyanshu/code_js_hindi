// for loop

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// } // syntax of for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 7) {
    // console.log("7 is Best Number");
  }
  //   console.log(element);
}

for (let i = 1; i <= 20; i++) {
  // console.log(`Outer Loop Value: ${i}`);
  // console.log(`Tabel Of : ${i}`); print tabel
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner Loop Value: ${j} and Inner Loop: ${i}`); to check how loop work
    // console.log(i + " " + "x" + " " + j + " " + "=" + " " + i * j); print tabel from 1-20
  }
}

let myArr = ["Flash", "Batman", "Superman"];

for (let index = 0; index < myArr.length; index++) {
  //use only less than in array length property in for loop
  const element = myArr[index];
  // console.log(element); // print array element
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("Detected 5");
    break; // break a loop
  }
  console.log(`value of i is: ${i}`);
}

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log("Detected 5");
    continue; // stop on condition than continue
  }
  console.log(`value of i is: ${i}`);
}
