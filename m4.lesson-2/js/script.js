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



function counter(selector) {
    let i = 0;
    const res = document.querySelector(selector);

    return function (){
        i++;

        if(res){
            res.innerText = i;
        }
        
        console.log(i);        
    }
}

// console.log(counter());


let d = counter(); //
let a = counter();

d();
// d();
// d();
console.log('-----------');

a();
a();
a();

console.log('-----------');
// let b = counter();
let x = 0; //let i = 0;
let b = function (){
    x++;
    console.log(x);
};


counter_1.onclick = counter('.count-result-1');
counter_2.onclick = counter('.count-result-2');
counter_3.onclick = b;



// let i = 0;

// counter_1.onclick = function (){
//         i++;
//         console.log(i);        
//     };

//     let i2 = 0;
// counter_2.onclick = function (){
//         i2++;
//         console.log(i2);        
//     };

//     let i3 = 0;
// counter_3.onclick = function (){
//         i3++;
//         console.log(i3);        
//     };