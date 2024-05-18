// get request and data from url using fetch and get data in json using json method

async function getAllUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err, "Error to fetch Api");
  }
}

getAllUser();

// another way this is more effictive way and time saving

fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err, "Error to fetch Api");
  });
