let divv = document.querySelector("div");

// console.log(divv.nextElementSibling);
divv.nextElementSibling.style.color = "red";

divv.nextElementSibling.nextElementSibling.style.color = "green";

// --------------

let p = document.querySelector("p");

p.previousElementSibling.previousElementSibling.style.color = "yellow";

// --------------

divv.parentElement.style.border = "2px solid black";

// -------------

let section = document.querySelector("section");

console.log(section.children);
console.log(section.children[0]);
console.log(section.children[1]);
console.log(section.children[2]);

section.children[1].style.color = "red";
