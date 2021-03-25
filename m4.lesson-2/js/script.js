'use strict'
const z = 1;

function fn1(a, b) {
    console.log('start');

    console.log(sum(a, b));

    console.log('end');
}

function sum(a, b) {
    console.log('sum');
    return a * b
}

fn1(2, 4);

// LIFO (Last In, First Out)

// Функція - код фунуції + доступні дані!!!

function test() {
    let x = 0;
    console.log(x);
}

const btnArr = document.querySelectorAll('.btn');

for (const elem of btnArr) {
    elem.onclick = function () {
        for (const elem of btnArr) {
            elem.style.backgroundColor = 'transparent';
        }

        console.log(this);
        this.style.backgroundColor = 'red';
    }
}

console.log(this);

// ===============================
// ЗАМИКАННЯ

let counter_1 = document.querySelector('.count-btn-1'),
    counter_2 = document.querySelector('.count-btn-2'),
    counter_3 = document.querySelector('.count-btn-3');

let a = 0;

function counter() {
    a++;
    console.log(a);
}

counter_1.onclick = counter;
counter_2.onclick = counter;
counter_3.onclick = counter;