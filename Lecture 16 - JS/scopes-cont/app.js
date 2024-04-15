// Gives 6 six times
// interview ques -> because var is in global scope
// for (var i = 0; i <= 5; i++) {
//     setTimeout (function (){
//         console.log(i)
//     },1000); //delay of 1sec = 1000
// }

// Gives 0,1,2,3,4,5 -> let -> block scope
// for (let i = 0; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000);
// }

// ---------------------

// **********Very Important **************
// var x = 10;
// let y = 20;

// function sam() {
//   var x = 1000;
//   let y = 2000;
//   console.log(x); // var has functional scope that is why it prints 1000
//   console.log(y); // y has block scope but because of lexical scoping it finds y in the function first and finds it, that is why prints 2000
// }
// sam();

// console.log(x); //this finds var as glbal scope so prints 10
// console.log(y); // this is script/local that is why simply prints 20

// ----------------------
// var x = 10;
// let y = 20;

// if (true) {
//   var x = 1000;
//   let y = 2000;
//   console.log(x); // var x is not in a function so it has global scope so it changes the value of x defined above that is 10 to 1000 and prints 1000
//   console.log(y); // let y has block scope and y is in a block so it prints 2000
// }

// console.log(x);
// console.log(y);

// --------------------