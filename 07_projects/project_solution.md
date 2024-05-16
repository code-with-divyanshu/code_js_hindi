# Projects related to DOM

## project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rexkhs)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  console.log(btn);

  btn.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2 solution

```javascript
const form = document.querySelector("form");

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  const results = document.querySelector("#results");
  results.style.backgroundColor = "#212121";
  results.style.borderRadius = "10px";
  results.style.padding = "10px";

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result
    if (bmi <= 24.9 && bmi >= 18.6) {
      results.innerHTML = `<span>Normal Range: ${bmi}</span>`;
    } else if (bmi < 18.6) {
      results.innerHTML = `<span>Under Weight: ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Overweight : ${bmi}</span>`;
    }
  }
});
```

## project 3 solution

```javascript
const clock = document.querySelector("#clock");
// const clock = document.getElementById("#clock");

setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project 4 solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submitBtn = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please add a valid number");
  } else if (guess < 1) {
    alert("Please add a number more than 1");
  } else if (guess > 100) {
    alert("Please add a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over, Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg("You guess it Right");
    endGame();
  } else if (guess < randomNumber) {
    displayMsg("Number is too low");
  } else if (guess > randomNumber) {
    displayMsg("Number is too high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} ,`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disable");
    startOver.removeChild(p);
    playGame = true;
    displayMsg("");
  });
}
```

## project 5 solution

```javascript
const keyInsert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
  keyInsert.innerHTML = `
  <div class="color">
    <table>
    <tr>
      <th>Key</th>
      <th>Kecode</th>
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key === " " ? "Space" : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </table>
  </div>
  `;
});
```

## project 6 solution

```javascript
const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId;

const startColorChanging = () => {
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }

  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

const stopColorChanging = () => {
  clearInterval(intervalId);
  intervalId = null;
};

const start = document.querySelector("#start");

const stop = document.querySelector("#stop");

start.addEventListener("click", startColorChanging);

stop.addEventListener("click", stopColorChanging);
```
