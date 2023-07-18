//using filter()
let fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

let unique = fruitBasket.filter((fruit, index) => {
    return fruitBasket.indexOf(fruit) === index;
})


//using set() method
const uniqueFruits = [...new Set(fruitBasket)];
console.log(uniqueFruits);


//using forEach() and includes() method
function deleteDuplicats(data) {
    const unique = [];

    data.forEach(value => {
        if (!unique.includes(value)) {
            unique.push(value)
        }
    });
    return unique
}
console.log(deleteDuplicats(fruitBasket));



//using vanila js
let arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    let unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(removeDuplicates(arr));