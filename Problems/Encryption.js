
/*********** space after every character with vanila js *****/

const sampleName = 'jubair';
let addSpaceName = '';

console.log(sampleName.length);

for (let i = 0; i < sampleName.length; i++) {
    console.log(sampleName[i]); //j, u, b, a, i, r
    addSpaceName += sampleName[i] + ' ';
    count++;
}
console.log('name2 is:', addSpaceName);

/*********** space after every character with ES6 *****/

function addSpace(str) {
    return str.split('').join(' ');
}

const str1 = 'coffee';
const str2 = 'banana';

console.log(addSpace(str1)); // c o f f e e
console.log(addSpace(str2)); // b a n a n a
console.log(typeof (addSpace(str2))); //string

/******* Find the center of a word ***********/

