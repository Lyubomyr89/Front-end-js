'use strict';
/*

// Математичні оператори
// Операції з числами
const str = '20';
const x = 20;
const y = 10;
const z = 5;

console.log('x == ', typeof x);
console.log('str == ', typeof str);

//Додавання
console.log(x + y);

//Віднімання
console.log(y - x);

//Множення
console.log(x * y);

//Ділення
console.log(x / y);

//Залишок від ділення
console.log(20 % 2);

const a = x % 2;

if(a > 0){
    console.log('Число не парне');
}else{
    console.log('Числопарне');
}

let num = 6;

// num = num + 10;
num += 10; //16

num -= 5; //11

num *= 2; //22

num /= 3;

console.log(num);


// Оператори порівняння
// >, <, >=, <=, ==, ===, !=, !==

// const x = 20;
// const y = 10;
// const z = 5;
// const str = '20'


console.log('x > y = ', x > y);
console.log('x < y = ', x < y);
console.log('z < y = ', z < y);

console.log('x >= y = ', x >= y);
console.log('x <= y = ', x <= y);

console.log('x == y', x == y);
console.log('x === y', x === y);

console.log('x == str', x == str); // Не порівнює типи даних
console.log('x === str', x === str); // Порівнює значення та тип даних

console.log('x != str', x != str); // Не порівнює типи даних
console.log('x !== str', x !== str); // Порівнює значення та тип даних


console.log(undefined == null);
console.log(undefined === null);

console.log(NaN === null);

let g;

if(g){
    console.log('x');
}else{
    console.log('no x');
}


//Числа
const num1 = 10;
const num2 = '15';
const num3 = num1 + Number(num2);

const fNum1 = '21.23Hello';

console.log(num1 + +num2);

const strNum = '23hello54';

console.log(Number(strNum));

// Number.parseInt() - витягує із рядка цілі числа
console.log(Number.parseInt(strNum)); //23
console.log(Number.parseInt(fNum1)); //21

let fSize = '20px';

console.log(Number.parseInt(fSize) * 2);

// Number.parseFloat - витягує із рядка цілі та дробові числа
console.log(Number.parseFloat(fNum1)); //21.23 
console.log(Number.parseFloat(strNum)); //23

const vNum1 = '22q' * 2;

console.log(vNum1);

console.log(); //Number.isNaN поверне true тільки у випадку коли вхідне значення NaN

//Додавання чисел з плаваючою точкою

console.log((0.1 + 0.2) === 0.3);

console.log(0.1 + 0.2);
console.log(((0.1 * 10) + (0.2 * 10)) / 10 === 0.3);


// Об'єкт Math

//Math.floor(3.9) - округлює завжди до меншого
console.log(Math.floor(3.9)); // 3

//Math.ceil(3.1) - Округлює завжди до більшого)
console.log(Math.ceil(3.1)); // 4

// Math.round(3.5) - округляє по правилах математики
console.log(Math.round(3.5));
console.log(Math.round(3.4));

console.log(Math.max(20, 22, 102, 305));
console.log(Math.min(20, 22, 102, 305));

console.log(Math.pow(25, 2)); //Піднімає до вказаного степеня

console.log(Math.random()); // Генерує вападкове число в діапазоні від 0 до 1
console.log(Math.ceil(Math.random() * (10 - 1) + 1));

const xr = Math.ceil(Math.random() * (10 - 1) + 1);
const yr = Math.ceil(Math.random() * (10 - 1) + 1);
if(xr === yr){
    console.log('===');
}
const xt = 2 * 'sdf'; //NaN
console.log(Number.isNaN(xt));

*/

//Рядки
// ``
const msg = 'Maxim';
const st = 'student';
const age = 12;
const year = 2008;
let xte = 15 + '15' + 15 + '5';
const div = '<div class="test"></div>';

console.log(typeof xte);
console.log('Імя: ' + msg + ', Вік: ' + age + ', рік народження: ' + year); //Конкатинація
console.log(15 + '15' + 15 + '5');

console.log("I'm");
console.log('I\\\'m \n"String"');

console.log(`Імя: ${msg}, вік: ${age}, рік народження: ${year}, ${13 + 5 * 6}`); //Інтерполяція

console.log(msg.toLocaleLowerCase());
console.log(msg.toLocaleUpperCase());

console.log(msg.indexOf('am')); //Повертає -1 якщо нічого не знайшов, або позиція входження підрядка в рядок

const msg2 = 'Hello World...'
const phone = '+38067854441';

console.log(msg2.includes('Hello')); //true/false 
console.log(phone.includes('+')); //true/false 

// Якщо true тоді виконати блок 1, в іншому випадку блок 2
if (phone.includes('+')) {
    //Блок 1
    console.log('Обрізати +');
} else {
    // Блок 2
    console.log('Обрізати + не потрібно');
}
// ======================================
if (phone.indexOf('+38') < 0) {
    console.log('Інша країна');
    //Блок 1
} else {
    console.log('Україна');
    // Блок 2
}