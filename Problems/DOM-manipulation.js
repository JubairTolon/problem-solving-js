// for all body of html
console.log(document.body);

// for all the tag element inside body
console.log(document.documentElement);

// for catch first child inside body ex: <div>hi</div>
console.log(document.body.firstElementChild);

// for show all node list inside body NodeList(13) [text, div, text, div, text, div, text, comment, text, script, text, script, div#checkdv_checker_auth]

console.log(document.body.childNodes);

// for show all children inside body ex:d[div, div, div, script, script]
console.log(document.body.children);


const arr = document.body.children;
const newArray = Array.from(arr);

console.log(arr)
console.log(newArray);


for (let i = 0; i < newArray.length; ++i) {
    console.log(newArray[i]);
}

// catch the element wit id
console.log(how)
console.log(document.getElementById('how'));

// catch the element wit class
console.log(document.getElementsByClassName('are'));

// catch the element wit class
const are = document.getElementsByClassName('are');
console.log(are[0]);
console.log(are[1]);


// catch the element wit name
const email = document.getElementsByName('email');
console.log(email);
console.log(email[0]);

// catch the element wit tagNAme
const span = document.getElementsByTagName('span');
console.log(span);
console.log(span[0]);

//for change content inside span tag
span[0].textContent = 'new span';
span[0].innerText = 'new span again';

//for change full tag element
span[0].innerHTML = `<span class='innerHTM'>innre HTMl</span>`;

//for change style of an element
span[0].style.color = 'red';
span[0].style.backgroundColor = 'black';

const myBtn = document.getElementById('mybtn');
console.log(myBtn);

myBtn.style.backgroundColor = 'green';
myBtn.style.color = 'white';
myBtn.style.borderRadius = '8px';


// query selector
const query = document.querySelector('.line')
console.log(query)
query.innerText = 'tolon';

//getAttributes
const getAttr = document.querySelector('#newp')
console.log(getAttr);
console.log(getAttr.getAttribute('id'));

//setAttributes
getAttr.setAttribute('class', 'myPClass');
console.log(getAttr)

// create a new element inside body
const h2 = document.createElement('h2');

//too show this element inside body at last
// document.querySelector("body").append(h2)
// or
// document.body.append(h2);

//too show this element inside body at first
document.body.prepend(h2);
h2.innerText = 'hello jubair'


//create text Node and add inside h2 tag

const myText = document.createTextNode('Hello jubo');
h2.append(myText);


//function call onClick
const myBtns = document.querySelectorAll('button');
console.log(myBtns);

// myBtn.onclick = bringMeHeading;
// or
myBtns[0].onclick = bringMeHeading;
myBtns[1].onclick = deleteHeading;

function bringMeHeading() {
    const h1 = document.createElement('h1');
    h1.innerText = 'h1 jubair'
    document.body.prepend(h1);
}

function deleteHeading() {
    const h1 = document.querySelector('h1');
    console.log(h1)
    h1.remove();
}


console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]


const set = new Set(["foo", "bar", "baz", "foo", "baz"]);
Array.from(set);
console.log(set)
// [ "foo", "bar", "baz" ]



const map = new Map([
    [1, 2],
    [2, 4],
    [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
    ["1", "a"],
    ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];


Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]


const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
    String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]