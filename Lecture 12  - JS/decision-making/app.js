

// let score = 33;
// let attendance = 70;

// if (score<33 && attendance>=75) {
//     console.log("Pass");
// } else {
//     console.log(Fail);
// }

// ----------------------------------------

// if (score <= 33 && attendance>=75) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// ----------------------------------------
// let score = 33;

// A ->
// Short Circuiting
// As soon as the output of the operation is final then it shortcircuits and donot moves ahead
// if (score < 33 && attendance >= 75) {
//         console.log("Pass");
//     } else {
//         console.log("Fail");
//     }

// B ->
// Will give reference error because attendence is not defined
// if (score <= 33 && attendance >= 75) {
//             console.log("Pass");
//         } else {
//             console.log("Fail");
//         }


// ----------------------------------------

// let score = 33;

// if (score >= 33 ||  attendance >= 75) {
//             console.log("Pass");
//         } else {
//             console.log("Fail");
//         }

// if (score > 33 ||  attendance >= 75) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// ----------------------

// let age = 25;

// if (age < 18) {
//     console.log("You are not allowed");
// } else if (age >= 18 && age < 25){
//     console.log("You are allowed but cannot have drinks");
// } else{
//     console.log("Everything is allowed for you");
// }

// ---------------------------------------


// { } -> Block

// This will run
let age = 10;
if (age >= 18)
    
//     console.log("bhai aja na")
// // Independent
// console.log("bhai chal rehne de")

// --------------------------------------

// This will run 

{
    console.log("Hello World")
}