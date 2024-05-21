// inheritance in classes

class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username); // call parent's constructor
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New Course Added By ${this.username}`);
  }
}

const teacher1 = new Teacher("Hitesh", "hitesh@gmail.com", "1231");

teacher1.addCourse();
teacher1.logMe();

const user1 = new User("Divyanshu");
user1.logMe();

console.log(teacher1 instanceof Teacher);
console.log(teacher1 instanceof User);
