'use strict';

// array
const arr = []; //Створено порожній масив

const cars = [
    'BMW',
    'KIA',
    'Honda',
];

console.log(cars.length); //Довжина масиву

console.log(cars);

cars[3] = 'Mazda';

cars[1] = 'Kia' + ' - 2020';

console.log(cars);


// Ітерація по масиву
let numArr = [
    2,
    5,
    33,
    76,
    99,
    111,
];

console.log(numArr);

console.log('-------------------------------------------');


for (let i = 0; i < numArr.length; i++) {
    console.log(numArr[i] * 2);
}

console.log('-------------------------------------------');



for (const num of numArr) {
    console.log(num);
}

// Багатовимірні масиви

// [ 'BMW', 'KIA', 'Honda', ];
const carsFull = [
    [
        'BMW', 2015, 'red', true
    ],
    [
        'KIA', 2020, 'gray', false
    ],
    [
        'Honda', 2012, 'green', true
    ]
];

carsFull[0][2] = 'gold'; //Доступ до елементів у багатовиірному масиві

console.log(carsFull);

for (let i = 0; i < carsFull.length; i++) {
    // console.log(carsFull[i]);

    for(let j = 0; j < carsFull[i].length; j++){
        console.log(carsFull[i][j] + `(${i}, ${j})`); 
    }
}

console.log(carsFull[1][0]);

// Методи split() і join()

let str = 'hello World welcome';
let arrStr = str.split(' '); // Розбиває кожне слово стрічки на елемент масиву, та повертає масив

console.log(`Використали split`, arrStr);

console.log(arrStr.join()); //Обєднує елементи масиву в рядок, та повертає стрічку
console.log(arrStr.join(''));
console.log(arrStr.join(' '));
console.log(arrStr.join(' -> '));



const emails = ['test-10', 2, true, ['test1', 68, false]]; 

emails[1] = 10;

console.log(emails[3][0]);

let strTest = 'lorem nrsr nytd';

console.log(strTest.split(' '));

strTest = strTest.split(' '); // string -> array
strTest = strTest.join(' '); // array -> string

console.log(strTest);

// indexOF()
console.log('Позиція знайденого елемента = ' + emails.indexOf(true)); // Повертає позицію елемента якщо він є у масиві, в іншому вападку -1

// includes()
console.log(cars.includes('BMW')); //true
console.log(cars.includes('BMW2')); //false


// Методи push(), pop(), shift(), unshift()

const users = ['Admin', 'Student', 'Alex', 'Denis', 'Yan'];
// push()
const leng = users.push('Max'); //Повертає значення довжини масиву
console.log(leng);
console.log(users);

// pop()
const lastEl = users.pop(); //Повертає значення видаленого елемента
console.log(lastEl);
console.log(users);

// unshift()
users.unshift('sUser' ,'SuperUser'); //Повертає значення довжини масиву
console.log(users);

// shift()
users.shift(); //Повертає значення видаленого елемента

console.log(users);


// ["sUser-0", "SuperUser-1", "Admin-2", "Student-3", "dghfsk-4"]


// Метод slice(початок, кінець)
const subUsers = users.slice(0, 2); //З 0 до вказаного елемента...

console.log("Підмасив -> ", subUsers);

// Метод splice(позиція, кількість)

users.splice(1, 1); // Видаляє елементи масиву із вказаної позиції...
console.log(users);

users.splice(3, 0, 'Admin-2'); //
console.log(5 % 10);