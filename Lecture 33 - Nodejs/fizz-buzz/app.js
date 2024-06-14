// -----------
// fizzbuzz - node fileName number -> print number till 1 to 19 ->  if the number is divisible by 3 then print fizz -> and if the number is divisible by 5 print buzz -> and but if the number is divisible by both print fizzbuzz -> ❌no google -> optimized code
// -----------

// % -> repeated division -> loop divison
// Solution 1 -> Most pathetic code because using 4 modulas in it

// function fizzbuzz1(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizz buzz");
//         }
//         else if (i % 3 === 0) {
//             console.log("fizz");
//         }
//         else if (i % 5 === 0) {
//             console.log("buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }

// let n = process.argv.pop()
// fizzbuzz1(n)

// Soltion 2 -> not the most optimized but better than above

// function fizzbuzz2(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = "";
//         if (i % 3 === 0) {
//             str += "fizz";
//         }
//         if (i % 5 === 0) {
//             str += "buzz";
//         }
//         if (str == "") {
//             str += i;
//         }
//         console.log(str);
//     }
// }

// let n = process.argv.pop()
// fizzbuzz2(n)

// Solution 3 -> Most optimized code

// function fizzBuzz3(n) {
//     let cnt3 = 1, cnt5 = 1;
//     for (let i = 1; i <= n; i++) {
//         let str = ""
//         if (cnt3 === 3) {
//             str += "fizz";
//             cnt3 = 0;
//         }
//         if (cnt5 === 5) {
//             str += "buzz";
//             cnt5 = 0;
//         }
//         if (str === "") {
//             str += i
//         }
//         console.log(str);
//         cnt3++;
//         cnt5++;
//     }
// }

// let n = process.argv.pop();
// fizzBuzz3(n)
