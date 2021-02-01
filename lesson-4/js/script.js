'use strict';

let c = 10;
//Цикл з передумовою
while (c < 10) {
    //     //Тіло циклу (код який виконається)

    console.log(`Ітерація - ${c}`);
    c += 1;
}

console.log('------------------------------------------------------------');

let d = 1;

//Цикл з після умовою
do {
    //     //Тіло циклу (код який виконається)

    console.log(`Ітерація - ${d}`);
    d += 1;
} while (d < 10);


let pass = '',
    count = 0;

do {
    // pass = prompt('Введіть пароль не менше 8 символів');
    pass = 'testtttt';
    count = count + 1;
} while (pass.length < 8 && count < 3);

if (count >= 3) {
    alert('Ви перевищели ліміт спроб!!!');
}



//Цикл for - цикл з лічильником
let counter = 10,
    sum = 0;

for (let i = 0; i <= counter; i += 1) {
    //Тіло циклу

    let x = i % 2; //Залишок від ділення на 2

    if (x === 0 && i !== 4) {
        sum += i;
    }

    console.log(`Сума парних чисел = ${sum}`);
}
// 2, 4, 6, 8,

// ??, ++x, x++, **

// console.log(3 ** 3); //9

// let t = 20;
// let z = 20;

// console.log(`postfix (++t) = ${++t}`);
// console.log(`prefix (z++) = ${z++}`);