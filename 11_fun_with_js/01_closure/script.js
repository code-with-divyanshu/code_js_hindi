// normal way

// document.querySelector("#orange").onclick = function() {
//   document.querySelector("body").style.backgroundColor = "orange";
// }
// document.querySelector("#green").onclick = function() {
//   document.querySelector("body").style.backgroundColor = "green";
// }

// using  function and closure

function clickHandler(color) {
  // document.querySelector("body").style.backgroundColor = `${color}`;

  return function () {
    document.querySelector("body").style.backgroundColor = `${color}`;
  };
}

document.querySelector("#orange").onclick = clickHandler("orange");
document.querySelector("#green").onclick = clickHandler("green");
