'use strict'
// Операція spread
const numbers = [1, 2, 3];

//    Розпилення аргументів

function sum(x, y, z) {
    return x + y + z;
}

console.log(sum(2, 5, 6));
console.log(sum(...numbers));


function sumFull() {
    const arg = Array.from(arguments);
    let suma = 0;

    for (const n of arg) {
        suma += n;
        console.log(`Сума чисел = ${suma}`);
    }

    console.log(`Сума чисел = ${suma}`);
}

sumFull(2, 5, 6, 98, 78, 8);

console.log('=========================================');


const n2 = [2, 5, 6, 98, 78, 8, 353, 453];

function sumFull2() {
    let suma = 0;
    for (const n of n2) {
        suma += n;
        // console.log(`Сума чисел = ${suma}`);
    }

    console.log(`Сума чисел = ${suma}`);
}

sumFull2(...n2);

// ----------------------------------------

//   Розпилення масивів

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5, [3]];
let arr3 = arr1.concat(arr2);

console.log(arr3);

const arr4 = [...arr1, ...arr2, ...arr3, 345];


arr4[6][0] = 8;
console.log(arr2);
console.log(arr4);

console.log('==============================');
// ----------------------------------------

// Розпилення об'єктів

let obj1 = { fn: 'button1', x: 42 };
let obj2 = { fn: 'button2', y: 13 };

const objFull = {
    ...obj1, 
    name: 'ghfd',
    ...obj2,
}

console.log(objFull);



// Операція rest

const fn = function(a, b, ...allArgs){
    allArgs.pop();
    console.log(a, b, allArgs);
}

fn('Один', 'Два', 'Три', 'Чотири', 5, 787, true);



let g = [1, 43, 76];

let fn2 = function (a, b, ...arr){
    console.log(a, b, arr);
}

fn2(...g, 435, 435, 45);