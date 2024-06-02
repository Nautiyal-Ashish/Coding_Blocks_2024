// modules -> ES6
// Two Types of exports  -> named , default 
// type module is compulsary
export let a = 10; //named
export let b = 20; //named

// default main naam kuch bhi daal sakte hai par named main wahi same naam dena acompulsary hai
export default function sum(a, b) {
    console.log(a + b);
}

// objects by default