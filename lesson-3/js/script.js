'use strict';

/*
       && | true  | false
     true | true  | false
    false | false | false
--------------------------------
       || | true  | false
     true | true  | true
    false | true  | false

--------------------------------------------------------

    Логічне "І"      (&&) - true якщо усі значення true
    Логічне "АБО"   (||) - true якщо хоча б одне значення true
    Логічне "НЕ"     (!) - інвертує true i false

 */

/*
   const tag = '<div class="test"></div>';
   const name1 = 'Alex';

   console.log('Імя ' + name1); //Конкатенація рядків
   console.log(`Імя ${name1}`); //Інтерполяція рядків
*/


//  операнд1  && операнд2 || операнд3  

// -------------------Логічне "І" --------------------

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(false && true && true && true);

// ------------------- Логічне "АБО" --------------------
console.log(true || true);
console.log(true || false || false || true);
console.log(false || false || false || false);

// ------------------- Логічне "НЕ" --------------------
console.log(!false || false || false || false); // false + ! => true
console.log(!true || false || false || false); // true + ! => false
console.log(!(true || false || false || false)); // true + ! => false

console.log(!false);

/*
--------------------------------------------------------

       && | true  | false
     true | true  | false
    false | false | false
--------------------------------
       || | true  | false
     true | true  | true
    false | true  | false

--------------------------------------------------------

    Логічне "І"      (&&) - true якщо усі значення true
    Логічне "АБО"   (||) - true якщо хоча б одне значення true
    Логічне "НЕ"     (!) - інвертує true i false

 */

console.log(!(!true && false) || (true || false) && (true && !false));

// (!true && false) - false + ! => true
// (true || false) - true
// (true && !false) - true

// const x = prompt('Ведіть число');
const x = 45;

console.log(`x = ${x}`);

const b = (x > 30) && (x <= 100);

console.log(`Введене число ${b}`);

// Приведення типів

/*
    false, 0, NaN, null, undefined, '', "", `` - завжди буде false
*/


// ------------ Розгалуження ---------------

// const yourName = prompt('Ваше імя'); //null === false
const yourName = 'Alex';

if (!yourName) {
    console.log('Привіт незнайомець');
} else {
    console.log(`Привіт ${yourName}`);
}


console.log('-----------------------------------------');


const age = prompt('Ведіть свій вік');


/*
    Якщо вік:2
        1. менше 6 - це маленька дитина
        2. від 6 до 18 - це школяр
        3. від 18 до 24 - це студент
        4. від 24 до 45 - це юний вік
        5. від 45 до 65 - це поважний вік
        6. від 65 до 80 - це пенсіонер
        6. від 80+ - довгожитель
*/

if(age){
    if( (!Number.isNaN(1 * age)) && (age > 0) ){
        
        if(age < 6){
            console.log('Маленька дитина');
        }else if(age >=6 || age < 18){
            console.log('Це школяр');
        }
        else if(age >=18 || age < 24){
            console.log('Це студент');
        }
        else if(age >=24 || age < 45){
            console.log('Ви юний');
        }
        else if(age >=45 || age < 65){
            console.log('У Вас поважний вік');
        }
        else if(age >=65 || age < 80){
            console.log('Ви пенсіонер');
        }else{
            console.log('Ви довгожитель');
        }
    }
    else{
        alert('Введіть корректне число!!!');
    }
}else{
    alert('Введіть корректні дані!!!!');
}