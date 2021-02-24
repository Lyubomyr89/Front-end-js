'use strict'

console.log(test(2, 3, "C"));

// Викликається в тільки після оголошення

const sumAdd = function (a = 5, b = 4, c = 2) {
    // Тіло функції    
    return true;
}

console.log(sumAdd());


// Іменована функція - викликається в будь-якому місці
function test(a = 0, b = 0, c = 0) {
    const sum = a + b;

    return sum * b * c;
}

console.log(test(2, 3, 56));

// --------------------------------------------

const arrow = function (a, b, c) {
    return a + b + c;
}
console.log(arrow(2, 4, 6));

// --------------------------------------------

const arrowNew = (a, b, c) => { //НЕ підтримують псевдомасив arguments та не підтримують this
     return a + b + c;
}
console.log(arrowNew(2, 4, 6));

// --------------------------------------------

const arrowNew2 = (a, b, c) => a + b + c; //Неявне повернення

console.log(arrowNew2(2, 4, 6));

// --------------------------------------------

const car = carName => {
    console.log(carName);
}

car("BMW");

// --------------------------------------------

function totalAddNumber() {
    let sum = 0;
    const arrNumber = Array.from(arguments);
    console.log('--------------');

    for (let number of arrNumber) {
        sum += number * 2;
        console.log(sum);
    }

}

totalAddNumber(4, 5, 7);