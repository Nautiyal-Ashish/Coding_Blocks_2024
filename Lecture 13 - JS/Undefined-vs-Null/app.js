// let out; // Undefined
// console.log(out);

// ---------------------------------
// There is no difference in both the down program
// let email;
// // if (email != undefined) {
// if (email !== undefined) {
//   console.log("Log in");
// } else {
//   console.log("Log Out");
// }

//---------------

// let email = undefined;

// if (email !== undefined) {
//   console.log("Log in");
// } else {
//   console.log("Log Out");
// }

// ---------------------------------
// Instead of undefined we should always use null
let email = null;

if (email !== undefined) {
  console.log("Log in");
} else {
  console.log("Log Out");
}
