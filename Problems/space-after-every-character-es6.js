/*********** space after every character with ES6 *****/

function addSpace(str) {
    return str.split('').join(' ');
}

const str1 = 'coffee';
const str2 = 'banana';

console.log(addSpace(str1)); // c o f f e e
console.log(addSpace(str2)); // b a n a n a
console.log(typeof (addSpace(str2))); //string