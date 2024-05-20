function SetUsername(username) {
  // complex DB Calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  SetUsername.call(this, username);
  // Call pass current exticution context  to another function but give this referense
  this.email = email;
  this.password = password;
}

const chai = new createUser("Ayush", "ayush@gmail.com", "123");
console.log(chai);
