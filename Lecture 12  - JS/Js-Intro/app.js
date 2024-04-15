let var1 = "preeti";
let var2 = "kanika";

let var3 = "delhi";

let var4 = "23";


// Normal
let output = "Hi" + var1 + "and" + var2 + "main" + var3 + "se hun aur meri umar hai" + var4;

// Variables are used and backticks are used 
// string template literals
let output2 = `Hi ${var1} and ${var2} main ${var3} se hun aur meri umar hai ${var4}`;

// Wrong ❌ 
let output3 = 'Hi ${var1} and ${var2} main ${var3} se hun aur meri umar hai ${var4}';

console.log(output);
console.log(output2);
console.log(output3)
