// class -> add,remove,toggle,contains

let el = document.querySelector("div");

// el.classList.add("sam");✅
// el.classList.add("kanak");✅
// el.classList.add("rahul");✅
// el.classList.add("ac");✅
// el.classList.add("swimming");✅
// ---------------------
// Add
el.classList.add("sam", "kanak", "rahul", "swimming", "ac"); //✅

// ----------------------
// Remove
el.classList.remove("kanak", "sam", "swimming");

// ----------------------
// Toggle
// true to false || false to true

el.classList.toggle("sam");

// ----------------------
// Contains
el.classList.contains("sam"); //true
el.classList.contains("kanak"); //false
