
let array = [22, 55, 44];
let temp = array[0];

if (array[0] < array[1] || array[0] < array[2]) {
    if (array[1] < array[2]) {
        temp = array[2]
    }
    else {
        temp = array[1]
    }
}


console.log('the greatest one is:', temp);
