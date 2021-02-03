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

// ?? - працює із значенням null
// const mass = prompt('Name') ?? "Анонім";
const mass = 'Y';

console.log(`Hllo ${mass}`);

//Інкремент -> (++) - збільшує значення на 1
//Декремент -> (--) - зменшує значення на 1

//Префіксна форма -> ++a
//Постфіксна форма -> a++

let t = 20;
let z = 20;

console.log(` (prefix++t) = ${++t}`); //21 --> значення повертається на момент виконання операції
console.log(`postfix (z++) = ${z++}`); //20 --> значення повертається на наступній ітерації/операції

console.log('z = ' + z); //21


console.log("піднесення до степеня", 3 ** 3); //9 
//  ** - піднесення до степеня

// -----------------------------2 практична, задача 8--------------
// c2 = a2 + b2 - формула теореми Піфагора

const BA = 6; // Катети
const AC = 8; // Катети 
let BC = 0; //гіпотенуза

BC = (BA ** 2) + Math.pow(AC , 2); //100
BC = Math.sqrt(BC); // 10

// BC = Math.sqrt((BA ** 2) + Math.pow(AC , 2)); //10

console.log('BC = ', BC);

// -----------------------------2 практична, задача 7--------------

// v = p*r2 * h

let v = 0;
// const dc = +prompt('Введіть діаметр', 10); // Діаметр
const dc = 10; // Діаметр

const h = 35 //висота циліндра
const r = dc/2;

v = Math.PI * (r ** 2) * h;

console.log('v = ', v);


// break 

for(let y = 0; y < 10; y++){

    if(y > 5){
        console.log('BREAK - цикл закінчено!');
        break;
    }
    console.log('Ітерація - ', y);
}


// continue

for(let y = 0; y < 10; y++){

    if(y % 2 === 0){
        console.log('Ітерація - ' + y + ' пропущена');
        continue;
    }

    console.log('Ітерація - ', y);
}

let num = prompt ("перше число =");
let s = prompt ("Знак= ");
let num2 = prompt ("друге число =");

console.log(s);


if(s === '+' || s === '-' || s === '*' || s === '/'){
    
    if (s = '+'){
        console.log(+num + +num2 );
    }
        
    else if (s = '-'){
        console.log(+num - +num2 );
    }

    else if (s = '*'){
        console.log(+num * +num2 );
    }

    else if (s  = '/'){
        console.log(+num / +num2 );
    }

}else{
    console.log('Не корректна математична дія!!!');
}