
let array = [-1, -2, -3];
let temp = array[0];
let temp2 = array[0];

if (array[0] < array[1] || array[0] < array[2]) {
    if (array[1] < array[2]) {
        temp = array[2];
    }
    else {
        temp = array[1]
    }
}

// another logic
for (let index = 0; index <= array.length; index++) {
    if (array[index] > temp2) {
        temp2 = array[index]
    }
    else {
        temp2 = temp2
    }
}
console.log('The greatest one is:', temp);
console.log('The greatest one from temp2 is:', temp2);
