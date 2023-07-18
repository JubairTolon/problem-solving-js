//using filter
let fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

let unique = fruitBasket.filter((fruit, index) => {
    return fruitBasket.indexOf(fruit) !== index;
});

console.log(unique);


