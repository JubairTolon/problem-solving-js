//using vanila js
let sample = 'Hello, Jubair!';

function reverseString(data) {
    let reversed = '';
    for (const c of data) {
        reversed = c + reversed;
    }
    return reversed;
}
console.log(reverseString(sample));




//using es6
const reversed = sample.split('').reverse().join('');
console.log(reversed);


//using reduce
const reversed1 = Array.from(sample).reduce((reversed, c) => c + reversed);
console.log(reversed1);