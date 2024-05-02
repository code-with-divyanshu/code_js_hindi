const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularsUser = {
  email: "divyanshubartwal67@gmail.com",
  fullName: {
    userFullName: {
      fName: "Divyanshu",
      lName: "Bartwal",
    },
  },
};

// console.log(regularsUser.fullName.userFullName.fName);

//merge object

const myObj1 = { 1: "a", 2: "b" };
const myObj2 = { 3: "c", 4: "d" };
const myObj4 = { 5: "e", 6: "f" };

// const myObj3 = { myObj1, myObj2 };
// const myObj3 = Object.assign({}, myObj1, myObj2, myObj4); // to assign all values to new target

const myObj3 = { ...myObj1, ...myObj2, ...myObj4 }; // mostly use
// console.log(myObj3);

const user = [
  {
    id: 1,
    email: "abcd@gmail.com",
  },

  {
    id: 2,
    email: "efgh@gmail.com",
  },
];

// console.log(user[0].email);
console.log(tinderUser);

//Object method
console.log(Object.keys(tinderUser)); // very useful
console.log(Object.values(tinderUser)); // very useful
console.log(Object.entries(tinderUser)); //

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // very useful

// learn methods from prototype methods or mdn site

// **************** object De -structure **********

const course = {
  courseName: "Js-Hindi",
  price: 999,
  courseInstructor: "Hitesh Sir",
};

const { courseInstructor } = course;
console.log(courseInstructor);
const { courseName: courseN } = course;
console.log(courseN);

// ******** Json API Intro ***********

// {
//   "name": "Divyanshu Bartwal",
//   "courseName" : "Js-Hindi",
//   "price": "free"
// }
