// simple way to add and create element

function addLanguage(langName) {
  const li = document.createElement("li");
  li.innerHTML = `${langName}`;
  document.querySelector(".language").appendChild(li);
}

addLanguage("Ruby");
addLanguage("PHP");

// optimize way

function addOptiLanguage(langName) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(langName));
  document.querySelector(".language").appendChild(li);
}

addOptiLanguage("Java");
addOptiLanguage("python");
addOptiLanguage("JavaScript");
addOptiLanguage("Golang");

// Edit and Remove element

// edit

const secondLang = document.querySelector("li:nth-child(2)");
const newLi = document.createElement("li");
newLi.textContent = "Mojo";
secondLang.replaceWith(newLi);

//edit another method
const firstLang = document.querySelector("li:nth-child(1)");
firstLang.outerHTML = "<li>TypeScript</li>";

// remove
const lastLang = document.querySelector("li:last-child");
lastLang.remove();
