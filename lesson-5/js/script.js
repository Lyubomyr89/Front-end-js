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

// indexOF(), includes()