const coding = ["js", "cpp", "rb", "py", "html", "css"];

// for each function in array

// simple function
coding.forEach((val) => {
  // use function without name
  //   console.log(val);
});

// callback  function
coding.forEach((val) => {
  // use function without name
  //   console.log(val);
});

// declare function first

function printMe(val) {
  console.log(val);
}

// coding.forEach(printMe);

// other parameters in for each loop

coding.forEach((val, idx, arr) => {
  //   console.log(val, idx, arr);
});

// for each in (objects in array)

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },

  {
    languageName: "Python",
    languageFileName: "py",
  },

  {
    languageName: "Java",
    languageFileName: "java",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

// return values of array in any variables using forEach loop

const values = coding.forEach((val) => {
  console.log(val);
  return val;
});

console.log(values); // for each not return any value
