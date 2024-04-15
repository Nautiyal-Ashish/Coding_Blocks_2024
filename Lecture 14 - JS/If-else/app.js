let marks = 55;

// First Approach -> Will work but not the optimized code
// if (marks >= 90) {
// } else if (marks >= 80 && marks < 90) {
//   console.log("O");
// } else if (marks >= 70 && marks < 80) {
//   console.log("A");
// } else if (marks >= 60 && marks < 70) {
//   console.log("B");
// } else if (marks >= 50 && marks < 60) {
//   console.log("C");
// } else if (marks >= 40 && marks < 50) {
//   console.log("D");
// } else {
//   console.log("FAIL");
// }

// Second Approach -> Better Approach than First
if (marks >= 90) {
  console.log("O");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
} else if (marks >= 50) {
  console.log("D");
} else if (marks >= 40) {
  console.log("E");
} else {
  console.log("FAIL");
}
