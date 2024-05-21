class Person {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const hitesh = new Person("hitesh");

// console.log(hitesh.createId()); // static is stop uses of method even in child

class Teacher extends Person {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teacher1 = new Teacher("Hitesh", "hitesh@gmail.com");

teacher1.logMe();
console.log(teacher1.createId()); // also not work here
