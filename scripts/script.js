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
const equalBtn = document.querySelector('#equals');
const screen = document.querySelector('.screen');

const numBtns = document.querySelectorAll('.num');
const opBtns = document.querySelectorAll('.ops');
const numBtnsArr = Array.from(numBtns);
const opBtnsArr = Array.from(opBtns);

let eqArr = [];
let operators = ['+', '-', '*', '/'];

function clrScreen() {
    screen.textContent = '';
}

function clrArr() {
    eqArr = [];
}

function clrOps() {
    opBtns.forEach(e => {
        e.setAttribute('value', 'OFF');
    })
}

numBtns.forEach((e, i) => {

    e.addEventListener('click', () => {

        opBtns.forEach(e => {
            if (e.getAttribute('value') === 'ON') {
                clrScreen();
                e.setAttribute('value', 'OFF');
            }
        })

        if (e.textContent === '0') {
            screen.textContent += '0';
            eqArr.push('0');
        } else {
            screen.textContent += `${i + 1}`;
            eqArr.push(e.textContent);
        }
    })

    /*if (opBtnsArr.some(e, i => {
        opBtns[i].getAttribute('value') === 'ON' ? true : false;
    }))*/

})


opBtns.forEach((e) => {
    e.addEventListener('click', () => {
        e.setAttribute('value', 'ON');
        if (!isNaN(eqArr[0]) && eqArr[eqArr.le] !== e.textContent) {
            eqArr.push(e.textContent);
        }
    })
})


clrBtn.addEventListener('click', () => {
    clrScreen();
    clrArr();
    clrOps();
})

function solve(eqArr) {
    let factors = [];
    let operands = [];
    let eqLength = eqArr.length;

    for (let i = 0; i < eqLength; i++) {
        if (eqArr[i]) {

        }
    }
}