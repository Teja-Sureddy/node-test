// 1. Write a simple application that accepts a value (integer) and returns the fibonacci value at that index of the value provided.
// The application should be performant at scale to handle larger numbers without slowing down exponentially.

// CMD: npm run fibonacci

const readline = require("readline-sync");


const number = Math.floor(Number(readline.question()));
if(isNaN(number)) return;

output = fibonacci(number);
console.log(output);

function fibonacci(number) {
    if (number === 0) return 0;
    if (number === 1) return 1;
    var list = [0, 1];
    for (let i = 2; i <= number; i++) {
        let dummyVar = list[1];
        list[1] = list[0] + list[1];
        list[0] = dummyVar;
    }
    return list[1];
}