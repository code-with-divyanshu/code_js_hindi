// prototype

let myName = "Divyanshu     ";

// console.log(myName.truelength()); // make a method truelength give a true length

let myHero = ["spiderman", "ironman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

// create new method on prototype in object

Object.prototype.divyanshu = function () {
  console.log(`divyanshu is present is all object`);
};

heroPower.divyanshu();
myHero.divyanshu();

// create new method on prototype in array

Array.prototype.hitesh = function () {
  console.log("hitesh says hello");
};

myHero.hitesh();
// heroPower.hitesh(); // not access

// inheritance

const user = {
  name: "Karan",
  email: "aasf@examle.com",
};

const teacher = {
  makeVideo: true,
};

const teacherSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "Js",
  fullTime: true,
  __proto__: teacherSupport,
};

teacher.__proto__ = user; // inherit property from user
console.log(teacher.name);

// mordern syntax

Object.setPrototypeOf(teacherSupport, teacher);

console.log(teacherSupport.makeVideo); // inherit property from teacher

//  make a method truelength give a true length

let anotherUser = "Ayush   ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${`True length is: ${this.trim().length}`}`);
};

anotherUser.trueLength(); // 5
myName.trueLength(); // 9
"Hitesh Sir".trueLength(); // 10
