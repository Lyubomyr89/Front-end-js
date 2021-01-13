'use strict';

/*
    Number
    String
    Boolean
    Null
    Undefined
*/

// let
// const

// Number
let studentAge = 14;
let num = 14.678345;

console.log(studentAge + num * 8);


// String
let studentName = 'Олександра';
const str = 'BHDFs_+]ss#^%$%';
const numStr = '10';

console.log(typeof numStr);


// Boolean  - true/false
let isGirl = true;

//Undefined
let age2;

console.log('Наші студенти: Імя: ' + studentName + ', вік: ' + studentAge + '. Це дівчина? ' + isGirl);

// Null
const isNull = null;

const hobby = 'Футбол';

let hobby2 = 34;

console.log(studentAge);
studentAge = 15;

console.log(hobby);
console.log(studentAge);

console.log(age2);


// Властивість

let leng = studentName.length;

console.log('Довжина імені = ' + leng);

// Метод
studentName = studentName.toUpperCase();

const msg = 'Hello';

console.log(msg);

console.log('before');

// alert(msg);


// const answ = confirm('Ти радий?');
// console.log(answ);

// const userName = prompt('Введіть своє імя');

// console.log(userName);

// console.log('Наш користувач радий? ' + answ + '! Імя користувача: ' + userName);

