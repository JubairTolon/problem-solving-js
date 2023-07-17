
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

function findCenter(sample) {
    let centerSpaceWord = '';
    let center = 0;

    if (sample.length % 2 === 0) {
        center = sample.length / 2;
        // console.log(center);
        for (let i = 0; i < sample.length; i++) {
            if (i === center - 1) {
                centerSpaceWord += sample[i] + ' ';
            }
            else {
                centerSpaceWord += sample[i];
            }
        }
    }
    else {
        center = Math.floor(sample.length / 2);
        console.log('This ia an odd number word! The center of this word is: ', sample[center]);
        for (let i = 0; i < sample.length; i++) {
            if (i === center) {
                centerSpaceWord += ' ';
            }
            else {
                centerSpaceWord += sample[i];
            }
        }
        console.log('Word without center letter: ', centerSpaceWord);
    }
    return centerSpaceWord;
}
const sampleWord1 = 'banana';
const sampleWord2 = 'mango';
// console.log(findCenter(sampleWord1));
console.log(findCenter(sampleWord2));
