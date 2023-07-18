
let sample = 'This is Jubair from bangladesh and I love this country';

function sortSentence(data) {
    let array = data.split(' ');
    console.log(array);
    let temp = ''
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].length > array[j].length) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array.join(' ');
}

console.log(sortSentence(sample));