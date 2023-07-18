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

//using forEach()
const elementCounts = {};
array.forEach(element => {
    elementCounts[element] = (elementCounts[element] || 0) + 1;
});
console.log(elementCounts);


//using reduce()
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

const count = fruitBasket.reduce((tempStorage, fruit) => {
    tempStorage[fruit] = (tempStorage[fruit] || 0) + 1;
    return tempStorage;
}, {});


/********Delete duplicate element from an array************/


