'use strict'
const car = {
    name: "BMW",
    model: 'X3',
    age: 2000,
    'full-name': function () {
        const fullName = this.name + " " + this.model;
        // console.log(fullName);
        return fullName;
    }
}

console.log(car['full-name']());
console.log('==================================');

for (const name in car) {
    console.log(car[name]);
}

const number = [0, 5, 4];

console.log(number[1]);

let id = number.push(true);

console.log(number);

console.log(id);

let vl = number.shift();

console.log(vl);

car.owner = 'Alexandra';
car.age = 2010;

console.log(car);

console.log(number);

number.splice(1, 0, 6, 7);

console.log(number);

number.push(22, 48);

let newNumber = number.slice(2);

console.log(newNumber);


function fn(n = 0) {
    const i = n % 2;

    if (i === 0) {
        return true;
    } else {
        return false;
    }
}

function isNum(x = 0) {
    if (!(x * 1)) {
        return false;
    }

    if (x >= 0) {
        return true
    }
}

let z = -456;

if (fn(z) && isNum(z)) {
    alert('Все чудово!!!')
}else{
    console.log('not valid');
}