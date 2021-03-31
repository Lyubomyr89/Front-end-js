'use strict'

// let c = 10;

function lock(){
    let c = 0;

    return function(){
        return c++;
    }
}

let d = lock();

console.log(d());
console.log(d());
console.log(d());
console.log(d());
console.log('---------------------------');
    d = lock();
console.log(d());
console.log(d());


let b = lock();


let name = 'Anton';

function show(){

    console.log(name);

}

show();

name = 'John';

show();

