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

// Solution 3 -> 

function fizzbuzz3(n) {
    for (let i = 1; i <= n; i++) {

    }
}

let n = process.argv.pop()
fizzbuzz3(n)
