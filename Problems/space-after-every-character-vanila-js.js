/*********** space after every character with vanila js *****/

const sampleName = 'jubair';
let addSpaceName = '';
let count = 0;

console.log(sampleName.length);

for (let i = 0; i < sampleName.length; i++) {
    console.log(sampleName[i]); //j, u, b, a, i, r
    addSpaceName += sampleName[i] + ' ';
    count++;
}
console.log('name2 is:', addSpaceName);