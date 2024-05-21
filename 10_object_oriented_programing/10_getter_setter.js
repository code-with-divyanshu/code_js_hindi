//  getter and setter

// ex- to encrypt email and password
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    // return this._password.toUpperCase();
    return `${this._password}hitesh`;
  }

  set password(value) {
    this._password = value;
  }
}

const hitesh = new User("hitesh@ai.com", "abcd");
console.log(hitesh.email);
console.log(hitesh.password);
