// // simple approch but not used useually

// // document.querySelector("#owl").onclick = () => {
// //   alert("owl clicked");
// // };

// // attachEvent();
// // jQuery - on

// // events should be learn

// // type, timestamp, defaultPrevented
// // target, toElement, srcElement, currentTarget,
// // clientX, clientY, screenX, screenY
// // altkey, ctrlkey, shiftkey, keyCode

// // addEventListners

// document.querySelector("#owl").addEventListener("click", (e) => {
//   console.log(e);
// });

// // event Propagation

// // bubbling -> when use true as false parameter => bottom to top
// // capturing -> when use true as third parameter => top to bottom

// // false is default value

// document.querySelector("#images").addEventListener(
//   "click",
//   (e) => {
//     console.log("clicked inside the ul");
//   },
//   false
// );

// document.querySelector("#owl").addEventListener(
//   "click",
//   (e) => {
//     console.log("owl clicked");
//     e.stopPropagation();
//   },
//   false
// );

// document.getElementById("google").addEventListener(
//   "click",
//   (e) => {
//     console.log("goole clicked");
//     e.stopPropagation();
//     e.preventDefault();
//   },
//   false
// );

// exercise

document.querySelector("#images").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.tagName);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }

  //   removeIt.parentNode.removeChild(removeIt); // another method
});
