// ES6

class user {
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

const chai = new user("Chai", "Chai@gmail.com", "234");

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

// behind the seen
// when class is not persent in js

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}gdsf`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea", "tea@gmail.com", "434");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());
