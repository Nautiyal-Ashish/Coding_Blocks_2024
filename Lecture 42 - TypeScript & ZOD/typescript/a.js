"use strict";
// let a = 10; // inference
// let a: number = 10;
// a = false // ❌
// a = 20 // ✅
// ----------------------
// let b: string = "true";
// b = "lol";
// ----------------------
// tuple
let tup = [19, "sam", 18];
// class Sam implements X {
class Sam {
    constructor(mail, umar) {
        this.email = mail;
        this.age = umar;
    }
    greet(phrase) {
        console.log(`${phrase} from ${this.email}`);
    }
}
let p1 = new Sam("ash@gmail.com", 18);
p1.greet("namaste");
