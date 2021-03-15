'use strict'

const cars = ['Toyota', 'BMW', 'Audi', 'Audi-6', 'Nissan'];
const num = [0, 54, 76, 78];


console.log(cars.push('Lada', 'Kia'));

console.group('for');
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
console.groupEnd();

function showArrayItems(array) {
    console.group('for...of');
    for (const x of array) {
        console.log(x);
    }
    console.groupEnd();
}

showArrayItems(num);
showArrayItems(cars);

document.querySelector('.out').innerHTML = cars.join(', ');

const students = {
    name: 'Maxim',
    age: 18,
    'current-year': 2021,
    yBirth() {
        // console.log('test');
        const yearBirth = this["current-year"] - this.age;
        return yearBirth;
        // console.group('yearBirth');
        // console.log(yearBirth);
        // console.groupEnd();
    }
};

students.yBirth();

students.faculty = 'CS';
students['faculty-u'] = 'CS2';

console.log(students['name']);

console.group('students');
for (const z in students) {
    if(z === 'yBirth'){
        console.log(z + ' = ' + students[z]());
    }else{
        console.log(z + ' = ' + students[z]);
    }
}
console.groupEnd();

// name = "Maxim"