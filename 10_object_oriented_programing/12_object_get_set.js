const Person = {
  _email: "h@hc.com",
  _password: "abc21",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },

  get password() {
    return this._password.toUpperCase();
  },

  set password(value) {
    this._password = value;
  },
};

const Person1 = Object.create(Person);

console.log(Person1.email);
console.log(Person1.password);
