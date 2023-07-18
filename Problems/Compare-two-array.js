const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 4, 3, 2, 1];

const is__same = array1.length === array2.length &&
    array1.every((currentElement) => {
        if (array2.indexOf(currentElement) > -1) {
            return (currentElement = array2[array2.indexOf(currentElement)])
        }
    })

console.log(is__same)