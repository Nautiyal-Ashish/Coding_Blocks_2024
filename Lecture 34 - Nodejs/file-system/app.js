let fs = require('fs');

// console.log(fs);

// CRUD -> create , read , update , delete

// Create
//---------------
// let data = "Hello Ashish"
// fs.writeFile(
//     'sam.txt',
//     data,
//     // optional
//     {
//         encoding: 'utf-8',
//         flag: 'w' //constraint what we are doing
//     },
//     (err) => {
//         if (err) { throw err }
//         console.log("data created succesfully");
//     })

// -------------

// let data = "mavrik";
// fs.writeFile(
//     'mav.txt',
//     data, (err) => {
//         if (err) {
//             throw err
//         } console.log("data created succesfully");
//     })

// --------------

// Read

// 1st way
// fs.readFile('sam.txt', {
//     encoding: 'utf-8',
//     flag: 'r'
// },
//     (err, data) => {
//         if (err) { throw err }
//         console.log(data);
//     }
// )

// ------------------------

// 2nd Way
// fs.readFile('sam.txt',
//     (err, data) => {
//         if (err) { throw err }
//         console.log(data.toString());
//     }
// )

// Update
// fs.appendFile('mav.txt',
//     "Maalik main bhauka",
//     (err) => {
//         if (err) { throw err }
//         console.log("file updated succesfully");
//     }
// )

// delete

// fs.unlink('mav.txt', (err) => {
//     if (err) {
//         throw err
//     } console.log("file removed");
// })3