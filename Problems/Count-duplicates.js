/********count duplicate element in an array************/

//using vanila js

const array = ['b', 'a', 'n', 'a', 'n', 'a'];

function findSimilar(sample) {
    let counts = {};

    for (let i = 0; i < sample.length; i++) {
        if (counts[sample[i]]) {
            counts[sample[i]] += 1;
        }
        else {
            counts[sample[i]] = 1;
        }
    }
    for (let item in counts) {
        if (counts[item] >= 2) {
            console.log(item + 'counted' + counts[item] + 'times')
        }
    }
    console.log(counts)
}

console.log(findSimilar(array));

//using forEach
const myArray = ['a', 'b', 'c', 'c', 'b', 'd'];
const elementCounts = {};
myArray.forEach(element => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
});
console.log(elementCounts);




//using forEach
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

const count = fruitBasket.reduce((tally, fruit) => {
    tally[fruit] = (tally[fruit] || 0) + 1;
    return tally;
}, {})

const myArray1 = ['a', 'b', 'c', 'c', 'b', 'd'];
var elementCounts1 = myArray1.reduce((count, item) => (count[item] = count[item] + 1 || 1, count), {});
console.log(elementCounts1);

/********Delete duplicate element from an array************/


