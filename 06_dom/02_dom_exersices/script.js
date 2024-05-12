// select element by getelement by id
// document.getElementById("title");

// use style attribute
const title = document.getElementById("title");

title.style.backgroundColor = "aqua";
title.style.padding = "15px";
title.style.borderRadius = "8px";

// to get content of selected node/element

console.log(title.textContent); // give all content
console.log(title.innerText); // give only visible content
console.log(title.innerHTML); // give all html tags also with content

// select element by querySelectors

document.querySelector("h2"); // select by element name
document.querySelector(".heading"); // select by class name
document.querySelector("#title"); // select by id name
document.querySelector('input[type="password"]'); // select by element attribute

myUl = document.querySelector("ul li:first-child");

myUl.style.backgroundColor = "green";
myUl.innerText = "One";

const h2 = document.querySelectorAll("h2"); //make a  NodeList

h2.forEach((h) => {
  h.style.color = "orange";
});

const allList = document.querySelectorAll("li");
// allList.style.color = "green";  not excuted
allList[2].style.color = "green"; // not array but index like array

allList.forEach((li) => {
  li.style.backgroundColor = "blue"; // overright previous style
});

// select element by getelement by className

const listItems = document.getElementsByClassName("list-item");

const myListArr = Array.from(listItems); // convert to array
console.log(myListArr);

myListArr.forEach((li) => {
  li.style.color = "red"; // overright previous style
});
