// let a = 10; // inference
// let a: number = 10;

// a = false // ❌
// a = 20 // ✅

// ----------------------

// let b: string = "true";
// b = "lol";

// ----------------------

// tuple

let tup: [number, string, number] = [19, "sam", 18];
// let tup: [number, string, number] = [ "sam",19, 18]; //❌

// ----------------------

// function ash(a: number, b: number) {
//   return a + b;
// }

// ash(10, 20);

// --------
// function ash(a: number, b: number): number {
//   return a + b;
// }

// ash(10, 20);

// ----------------------
// if returning nothing then write void in arrow function
// function a(fn: () => string): boolean {
//   console.log("inside a");
//   return true;
// }

// function b() {
//   console.log("i am b");
//   return "sam";
// }

// a(b);

// ---------------------

// let arr: number[] = [10, 20, 30, 40, 50];
// let arr: string[] = ["10", "20"];

// ---------------------

// let user = {
//   name: "ash",
//   age: 15,
//   isMale: true,
//   email: "ash@gmail.com",
// };

// interface User {
//   name: string;
//   age: number; //cannot make this optioanl as it is used below in the function
//   isMale: boolean;
//   email?: string; // ?-> optional parameter
// }

// function sam(user: User): boolean {
//   if (user.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// sam(user);

// -------------------------
//interface

// interface X {
//   email: string;
//   age: number;
// }

// interface Y extends X {
//   greet(phrase: string): void;
// }

// // class Sam implements X {
// class Sam implements Y {
//   email: string;
//   age: number;
//   constructor(mail: string, umar: number) {
//     this.email = mail;
//     this.age = umar;
//   }
//   greet(phrase: string) {
//     console.log(`${phrase} from ${this.email}`);
//   }
// }

// let p1 = new Sam("ash@gmail.com", 18);
// p1.greet("namaste");

// --------------------------
// type do same work as interface

// let user = {
//   name: "ash",
//   age: 15,
//   isMale: true,
//   email: "ash@gmail.com",
// };

// type User = {
//   name: string;
//   age: number;
//   isMale?: boolean;
//   email: string;
// };

// function sam(user: User): boolean {
//   if (user.age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// sam(user);

// --------------------------
// interface X {}
// interface Y extends X {}

// type X = {};
// type Y = X & {};

// interface X{}
// type Y = X & {} // dono are hai

// type X = {};
// interface Y extends X {}

// ----------------------------

type X = {
  email: string;
  age: number;
};

// type Y = X | { //this cannot work with class but type allow it (reason for failure)
type Y = X & {
  greet(phrase: string): void;
};

// class Sam implements X {
class Sam implements Y {
  email: string;
  age: number;
  constructor(mail: string, umar: number) {
    this.email = mail;
    this.age = umar;
  }
  greet(phrase: string) {
    console.log(`${phrase} from ${this.email}`);
  }
}

let p1 = new Sam("ash@gmail.com", 18);
p1.greet("namaste");
