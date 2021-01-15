'use strict';

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