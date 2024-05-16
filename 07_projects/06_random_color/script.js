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
