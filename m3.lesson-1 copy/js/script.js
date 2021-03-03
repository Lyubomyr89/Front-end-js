'use strict'

// const car = ['Name', 'color', 'model', 'year'];
let keys = 4;
let doors = 5;

const car = {
    name: 'BMW',
    year: 2018,
    model: 'X6',
    color: 'red',
    owners: ['Max', 'Jon'],
    age: function () {
        return 2021 - this.year;  //this = car
    },
    'user-name': 'Admin',
    keys,
    doors,
    price: 5000,
}
console.log(car);

// for(), for...of, for..in

console.log(car);
// console.log(car["user-name"]);

for (const key in car) {
    console.log('VALUE = ' + car[key]);
}

console.log('-----------------------------------------');


const person = {
    name: 'Pingvin',
    age: 33,
    country: 'Ukraine',
    hobby: 'Football',
    year() {
        return 2021 - this.age;
    },
    isCar: true,
}

const arr = {
    student: ['max', 'alex'],
    teacher: ['fds', 'dsf'],
}

const arr2 = [
    [],
    ['max', 'alex'],
    ['fds', 'dsf'],
]

for(const val of arr.student){
    //Цикл для роботи з масивами
    // console.log(val);
} 

for (const info in person){
    //Цикл для роботи з об'єктами
    
    if(info === 'year'){
        console.log(person[info]());
    }else{
        console.log(person[info]);
    }
}
console.log('---------------------------');

// console.log(person['name']);
// console.log(person['age']);
// console.log(person['country']);