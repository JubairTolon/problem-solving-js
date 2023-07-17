/******* Find the center of a word ***********/

function findCenter(sample) {
    let centerSpaceWord = '';
    let center = 0;

    if (sample.length % 2 === 0) {
        center = sample.length / 2;
        for (let i = 0; i < sample.length; i++) {
            if (i === center - 1) {
                centerSpaceWord += sample[i] + ' ';
            }
            else {
                centerSpaceWord += sample[i];
            }
        }
    }
    else {
        center = Math.floor(sample.length / 2);
        console.log('This ia an odd number word! The center of this word is: ', sample[center]);
        for (let i = 0; i < sample.length; i++) {
            if (i === center) {
                centerSpaceWord += ' ';
            }
            else {
                centerSpaceWord += sample[i];
            }
        }
        console.log('Word without center letter: ', centerSpaceWord);
    }
    return centerSpaceWord;
}
const sampleWord = 'mango';
console.log(findCenter(sampleWord));