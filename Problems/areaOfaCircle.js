
const prompt = require("prompt-sync")({ sigint: true });

let R = parseFloat(prompt("Enter the value of R: "));

let A = parseFloat(3.14159 * R * R).toFixed(4);

console.log('A=', A)
