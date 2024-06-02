// Events -> Lifecycle

// HTML
//  |
// Body
//  |
// Section (#grandparent)
//  |
// Section (#Parent)
//  |
// Section (#child)

// event-capturing -> From above to down
// target - the element we select
// bubbling - from target to above

let grandParent = document.querySelector("#grandParent");
let parent = document.querySelector("#parent");
let child = document.querySelector("#child");

// addEventListener(type,callback,usecapture)

// grandParent.addEventListener("click", function () {
//   console.log("Grand Parent");
// }); //bubbling

// parent.addEventListener("click", function () {
//   console.log("Parent");
// }); //bubbling

// child.addEventListener("click", function () {
//   console.log("Child");
// }); //bubbling

// -----------------
// Bydefault - false means bubbling

// grandParent.addEventListener("click", function () {
//   console.log("Grand Parent");
// }, false); //bubbling

// parent.addEventListener("click", function () {
//   console.log("Parent");
// }, false
// ); //bubbling

// child.addEventListener("click", function () {
//   console.log("Child");
// }, false
// ); //bubbling

// -------------------------

// grandParent.addEventListener("click", function () {
//   console.log("Grand Parent");
// }, false); //bubbling

// parent.addEventListener("click", function () {
//   console.log("Parent");
// }, true); //capturing

// child.addEventListener("click", function () {
//   console.log("Child");
// }, false); //bubbling

// ---------------------------

grandParent.addEventListener("click", function () {
     console.log("Grand Parent");
}); //bubbling

parent.addEventListener("click", function () {
     console.log("Parent");
}); //bubbling

child.addEventListener("click", function () {
     console.log("Child");
}, true); //capturing

