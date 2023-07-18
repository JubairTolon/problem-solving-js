//using vanila js
// let array = [0, 11, 23, 10, 45, 55, 42, 15, 78, 87, 51, 20, 200]

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
    return data
}

console.log(sort(array));


//using sort()

let array = [0, 11, 23, 10, 45, 55, 42, 15, 78, 87, 51, 20, 200]
const sortedArray = array.sort(function (a, b) {
    return a - b;
});
console.log(sortedArray)