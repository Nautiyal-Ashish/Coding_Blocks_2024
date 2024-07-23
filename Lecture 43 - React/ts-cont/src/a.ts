// let arr: number[] = [1, 2, 3, 4, 5];

// Only Numbers or Only Strings
// let arr2: number[] | string[] = ["1", "2"];

// --------------------------

// let arrow = () => {
//   return 190;
// };
// console.log(arrow());

// ---------------------------
// enum -> keyword -> used for creating user defined constant value -> iterate

// type Key = "up" | "down" | "left" | "right";

// enum key {
//   up,
//   right,
//   left,
//   down,
// }

// function pressed(keyPressed: key) {
//   if (keyPressed === key.up) {
//     console.log("UP");
//   } else if (keyPressed === key.down) {
//     console.log("DOWN");
//   }
// }

// pressed(key.up);
// pressed(key.down);

// ------------------------------

// enum Responses{
//   Success = 200,
//   NotFound = 404,
//   Error = 500,
// }

// app.get('/', (req,res)=>{
//   res.status(Responses.Success).send("hello")
// })

// app.get('/', (req,res)=>{
//   res.status(Responses.Success).send("hello")
// })
