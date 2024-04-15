// let naam = true;
// console.log(naam);

// let naam2 = false;
// console.log(naam2);


// -----------------------------


// Equality concept: general (==) , strict equality (===)

// general equality -> type is not checked 
// strict equality -> type is checked
let sam = "10";

// let ans = 10 == sam; //false but came true -> type conversion happed here 
let ans = 10 === sam //false will come
// console.log(ans);
// console.log(typeof ans);

// ----------------------------------

let var1 = 100;
let var2 = "100";
let out = var1 == var2 //t 
let out2 = var1 === var2 //f 
let out3 = var1 != var2 //f
let out4 = var1 !== var2 //t
// console.log(out, out2, out3, out4);


// -----------------------------------
let var3 = 10;
let var4 = 20;

let ans1 = var3 > var4;//f
let ans2 = var3 >= var4;//f
let ans3 = var3 < var4;//t
let ans4 = var3 <=var4 ;//t