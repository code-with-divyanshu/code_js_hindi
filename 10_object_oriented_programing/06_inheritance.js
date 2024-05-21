// inheritance in classes

class user {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class teacher extends user {
  constructor(username, email, password) {
    super(username); // call parent's constructor
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New Course Added By ${this.username}`);
  }
}

const teacher1 = new teacher("Hitesh", "hitesh@gmail.com", "1231");

teacher1.addCourse();
teacher1.logMe();

const user1 = new user("Divyanshu");
user1.logMe();

console.log(teacher1 instanceof user);
console.log(teacher1 instanceof teacher);
