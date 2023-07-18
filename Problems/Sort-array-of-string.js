//using vanila js
let array = ['a', 'abcdefghi', 'abcde', 'abcdef', 'abcd']

function sort(data) {
    let a = 0;

    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] > data[j]) {
                a = data[i]
                data[i] = data[j]
                data[j] = a
            }
        }
    }
    return data;
}

console.log(sort(array));

let sample1 = 'bangladesh';
const sortedWord = [...sample1].sort().join('');
console.log(sortedWord)
let sample2 = 'This is Jubair from bangladesh and I love this country';