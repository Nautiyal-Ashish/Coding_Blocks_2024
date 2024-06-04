// const sam = 10;
// console.log(sam);
// function a() {
//     console.log("Hello from a");
// }

// a()

// function b() {
//     console.log("Hello from b");
// }

// b()

// export -> By default empty object {}
// and explicitily export
// module.exports = { sam, a, b } 

// ------------

const sam = 10;
console.log(sam);
function a() {
    console.log("Hello from a");
}
a()

function b() {
    console.log("Hello from b");
}
b()

// module.exports = { samy: sam, keya: a, keyb: b } //key value pair renaming 

// --------------
// module.exports = { sam: sam, a: a, b: b }
//key value both same  -> If the key and value are same we can ommit or remove key and : 

// -----------------

module.exports = "Ashish Nautiyal";