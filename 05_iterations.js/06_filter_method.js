const coding = ["js", "cpp", "rb", "py", "html", "css"];

// return values of array in any variables using forEach loop

const values = coding.forEach((val) => {
  console.log(val);
  return val;
});

console.log(values); // for each not return any value
