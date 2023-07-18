
let fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

const unique = fruitBasket.filter((fruit, index) => fruitBasket.indexOf(fruit) === index);
console.log(unique);

