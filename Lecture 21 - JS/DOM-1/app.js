// DOM Part 1

// Selectors ->
// getElementByID ,
// getElementByTagName,
// getElementClassName,
// querySelector,
// querySelectorAll;

// --------------------
// getElementByTagName

// let h1 = document.getElementsByTagName("h1"); //array
// console.log(h1);

// ---------------------
// getElementByID

// let dom = document.getElementById("dom");
// console.log(dom);

// --------------------
// getElementClassName

// let classes = document.getElementsByClassName("divv"); //array
// console.log(classes);

// --------------------
// querySelector

// these all return single elements
// console.log(document.querySelector("h1"));
// console.log(document.querySelector("#dom"));
// console.log(document.querySelector(".divv"));

// --------------------
// querySelectorAll

// console.log(document.querySelectorAll("h1")); //array
// console.log(document.querySelectorAll(".divv")); //array

// console.log(document.querySelectorAll("#dom")); //will select but it is not recommended //array

// -----------------------------------------
// CSS -> .style

// let h1 = document.getElementsByTagName("h1");
// h1[0].style.backgroundColor = "red";
// h1[1].style.backgroundColor = "red";

// -------
// for (let item of h1) {
//   item.style.fontSize = "100px";
// }

// --------------

// let idd = document.getElementById("dom");
// idd.style.backgroundColor = "yellow";

// --------------

// let classes = document.getElementsByClassName("divv");
// classes[0].style.color = "aqua";

// giving single property
// for (let item of classes) {
//   item.style.fontSize = "70px";
//   item.style.color = "red";
// }

// way of giving multiple properties
// for (let item of classes) {
//   item.style.cssText = `
//   color:red;
//   font-size:50px;
//   background-color:yellow
//   `;
// }

// -----------------

// let queryTag = document.querySelector("h1");
// let queryID = document.querySelector("#dom");
// let queryClass = document.querySelector(".divv");

// queryTag.style.backgroundColor = "red";
// queryID.style.backgroundColor = "blue";
// queryClass.style.backgroundColor = "yellow";

// -------------------

let element = document.querySelector("h1");
// getters
console.log(element.innerText, "h1");
console.log(element.textContent, "h2"); //it shows hidden values also
console.log(element.innerHTML);

//-------------------

// setters
// element.innerText = "sam";
// element.textContent = "samarth vohra";

// ------------
// element.innerText = "<h1>sam</h1>";
// element.textContent = "<h1>samarth</h1>";
// element.innerHTML = "<i>vohra</i>";

// ------------------
// getAttribute

// getter✅
let an = document.querySelector("a");

console.log(an.getAttribute("href"));

// setter❌
an.getAttribute("href", "http://reddit.com"); //wrong

// ---------
// setAttribute
an.setAttribute("href", "http://reddit.com");

// -----------------

// Ques : Create a corosoul ->  assuming 5 pics
// 1st photo -> after 2sec image change -> repeat for all pics -> at last to 1st step
// if above is done then add after 30 sec automatically process should stop
// Use only JS and DOM
