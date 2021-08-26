const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevemBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const plusBtn = document.querySelector('#plus');
const minusBtn = document.querySelector('#minus');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const clrBtn = document.querySelector('#clr');
const ansBtn = document.querySelector('#ans');
const screen = document.querySelector('.screen');

const numBtns = document.querySelectorAll('.num');
const opBtns = document.querySelectorAll('.ops');

let factor1, factor2, ans;
let operators = ['+', '-', '*', '/'];

numBtns.forEach((e, i) => {

    e.addEventListener('click', () => {
        if (e.textContent === '0') {
            eqStr += '0';
            screen.textContent += '0';
        } else {
            screen.textContent += `${i+1}`;
        }
    })
})

opBtns.forEach((e, i) => {
    e.addEventListener('click', () => {
        eqStr += `${operators[i]}`;

    })
})


clrBtn.addEventListener('click', () => {
    eqStr = '';
    screen.textContent = '';
})