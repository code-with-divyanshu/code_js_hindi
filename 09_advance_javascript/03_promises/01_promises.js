// Promises in javascript use to get api request

//  1st way

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task is Completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise is Consumed");
});

// 2nd way

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task2 is Completed");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise 2 is consumed");
});

// use parameter in resolve method

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Ajay", email: "abcd@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

// use reject method from for a if error while get request
// and use of  catch method to catch error

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Divyanshu", email: "adas@gmail.com" });
    } else {
      reject("Something Went Wrong");
    }
  }, 1000);
});

// promoise chain and callbak hell

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  }) // promoise chain
  .then((username) => {
    console.log(username);
  }) // catch err
  .catch((err) => {
    console.log(err);
  }) // default
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });

/** uses of callback function one after one is make pyramid like structure is called callback hell */

// consumed promises by  async await to solve callback hell

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "123" });
    } else {
      reject("JavaScript Went Wrong");
    }
  }, 1000);
});
// use try or catch method to catch error in async function

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();
