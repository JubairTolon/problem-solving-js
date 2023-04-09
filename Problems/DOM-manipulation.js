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