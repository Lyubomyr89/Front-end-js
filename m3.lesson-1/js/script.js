'use strict'

// const car = ['Name', 'color', 'model', 'year'];
let keys = 4;
let doors = 5;

const car = {
    //key: value,
    //key: value,
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

    car.year = 2016; //Зміна значення властивості об'єкта

console.log(`Ваш автомобіль - ${car.name}, модель - ${car.model}, рік випуску - ${car.year}, вік автомобіля - ${car.age()} років, попередні власники ${car.owners}`);

    delete car.owners; //Видалення значення властивості об'єкта

    car.speed = 250; //Створення нової властивості об'єкта
    console.log(car.speed);
                

    console.log(car["user-name"]);
            
    console.log(car.keys);
    console.log(car.doors);
    console.log(car);
            
            
    // for(), for...of, for..in

// Створення методів ES6
// this

const test2 = {
    rt1: function(){
        return true;
    },
    rt2(){
        console.log(this.rt1());
    }
}

console.log(test2.rt1());
test2.rt2();

const test3 = {
    rt1: function(){
        return false;
    },
    rt2(){
        console.log(this.rt1());
    }
}

test3.rt2();