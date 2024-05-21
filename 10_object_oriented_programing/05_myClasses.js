// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const chai = new User("Chai", "Chai@gmail.com", "234");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the seen
// when class is not persent in js

function user(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

user.prototype.encryptPassword = function () {
  return `${this.password}gdsf`;
};

user.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new user("tea", "tea@gmail.com", "434");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
