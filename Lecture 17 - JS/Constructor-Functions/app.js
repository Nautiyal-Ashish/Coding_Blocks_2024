// function sam() {}
// console.log(sam());

// ----------------------

// constructer functions -> new call -> create object
// convention not compulsory -> make the function name first word capital
// function Sam() {}

// let out = new sam(); //constructor function by adding new keyword in front of function
// console.log(out);

// ---------------------

// function Person() {
//   this.name = "ashish";
//   this.favColor = "Red";
//   this.isMale = true;
//   this.age = 33;
// }

// let obj1 = new Person();
// console.log(obj1);

// ----------------------

// function User(naam, umar, sahi) {
//   this.name = naam;
//   this.age = umar;
//   this.isMale = sahi;
//   // this.dance = function () {
//   //   console.log("Pappu Cant Dance saala");
//   // }; //not a good technique reapeting in both person1 and person2
// }

// let person1 = new User("Rony", 24, true);
// let person2 = new User("Renuka", 35, false);
// console.log(person1); //object
// console.log(person2); //object
// -----
// console.log(person1.name); //different
// console.log(person1.age); //different
// console.log(person1.dance()); same repeating

// console.log(person2.name); //different
// console.log(person2.age); //diferrent
// console.log(person2.dance()); //same repeating

// let obj ={} // object.prototype
// new obj() // User.prototype = parent

// -----------------------------
function User(naam, umar, sahi) {
  this.name = naam;
  this.age = umar;
  this.isMale = sahi;
}

User.prototype.dance = function () {
  console.log("Pappu cant dance sala");
};

let person1 = new User("Rony", 24, true);
console.log(person1);

// -----------------------------
