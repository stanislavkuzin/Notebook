'use strict'

const button = document.getElementById('buttonadd');
const text = document.getElementById('text');
const list = document.getElementById('list');
let lis = document.getElementById('list').children;
list.innerHTML = localStorage.getItem('save');
let arr = [];

const add = () => {
    arr.push(text.value);
    text.value = '';
    saveLi();
}

function saveLi() {
    let li = document.createElement('li');
    list.append(li);
    li.textContent = arr[arr.length - 1];
    addX();
}

function addX() {
    let but = document.createElement('button');
    lis[lis.length - 1].append(but);
    but.classList.add('buttonx');
    but.textContent = 'x';
    saveElement(); 
}

function saveElement(){
    const html = list.innerHTML;
    localStorage.setItem('save', html);
 }

const del = (event) => {
    if ( event.target.tagName === 'BUTTON') {
        event.target.parentNode.remove();
        saveElement();
    }
}

button.addEventListener('click', add);
list.addEventListener('click', del);

