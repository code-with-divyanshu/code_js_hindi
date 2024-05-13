const parent = document.querySelector(".parent");

// select child element by parent element

// console.log(parent); // print parent element
// console.log(parent.children); // print their childrens
// console.log(parent.children[1].innerHTML); // print index children inner content

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

// another method

parent.children[1].style.color = "orange";
console.log(parent.firstElementChild); // for select first element child of parent element
console.log(parent.lastElementChild); // for select last element child of parent element

// select parent element and next sbiling element by child element

const dayOne = document.querySelector(".day");
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

//**** Nodelist and childNodes */

console.log("NODES: ", parent.childNodes);
