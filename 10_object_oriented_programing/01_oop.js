// object literal

const user = {
  username: "Divyanshu",
  loginCount: 4,
  singedIn: true,

  getUserDetails: function () {
    console.log("Got User Details From Database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

//constructor function (new is a constructor function)

function User(username, loginCount, isLoogedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoogedIn = isLoogedIn;

  this.greeting = function () {
    console.log(`Welcome: ${this.username}`);
  };

  return this;
}

// const userOne = User("Karan", 23, true);
// const userTwo = User("Hitesh", 32, false); // value is overright to userOne

// new keyword ->  used to create an instance(a new empty object is created) of an object that has a constructor function
// return is by default in constructor function

const userOne = new User("Karan", 23, true);
const userTwo = new User("Hitesh", 32, false);

console.log(userOne.constructor);
console.log(userTwo);
console.log(userOne.constructor); // refrense itself
console.log(userOne instanceof User); // to check instance of
console.log(userTwo instanceof Object);
