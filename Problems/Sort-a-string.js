//using vanila js
let sample1 = 'bangladesh';

function sortString(string) {
    let array = string.split('');
    console.log(array)
    let temp = ''
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array.join('');
}
console.log(sortString(sample1));




//using es6
const sortedWord = [...sample1].sort().join('');
console.log(sortedWord)
let sample2 = 'This is Jubair from bangladesh and I love this country';