'use strict'

const x = 25;
const y = 30;



const sumAdd = function (a = 5, b = 4, c = 2) {
    // const sum = ;
console.log('test 1');

    // return x + y;
    return (
        a + b * c
        // 15 + 10 * 4
    );
    // Тіло функції
}

console.log(sumAdd(15, 10, 4));
console.log(sumAdd(12, 10, 4));
console.log(sumAdd(10, 10, 4));

// sumNumber(); //Виклик функції
function sumNumber (a = 5, b = 4, c = 2) {
// console.log('test 2');

    // return x + y;
    return (            // return нічого не виводить, тільки повертає значення 
        a + b * c
    );
    // Тіло функції
}


// console.log(sumNumber());
// console.log(sumAdd());


let f = sumNumber();
let h = sumAdd();

console.log(f, sumAdd());

// ------------------------------------

const hello = function(name = 'Анонім', age = 0){
    // const name = 'Артем';
    console.log('Привіт ' + name + ', ' + age + ' років');    

    if(!isAdult(age)){
        console.log(`${name}, Ви не повнолітні!!!`);
        return false;
    }else{
        console.log(`${name}, Ви повнолітні!!!`);
    }
}

function isAdult(userAge){
    if(userAge < 18){
        return false;
    }else{
        return true;
    }
}


hello('MAx', 18);

//Глобаьна область видимості
//Область видимості в середені інструкції (if, for, while, ...)
//Область видимості в середені функції