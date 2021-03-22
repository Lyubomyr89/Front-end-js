'use strict'
function y() {
    console.log('y');
}
function fx(y) {

    console.log('t1');
    y();
}
fx(y);
// =========================================
function f1(b, f) {
    console.log(b, f);
    y();
}

function f2(a, b) {
    return a + b;
}

f2(2, 4);

f1(f2(2, 4), 6);

// ==========================================

function f3(x1) {
    console.log(x1());
}

function f4(a, b) {
    console.log(a + b);

    return (a + b);
}

f4(3, 5);

f3(function () {
    return f4(3, 10);
});

// ==========================================

let arr = [3, 545, 645, 54, 59, 122]; //Перемемножити на 2
let arrDouble = [];

let double = (a) => {
    console.log(a);
    return a * 2;
};

for (const i of arr) {
    arrDouble.push(double(i));
}

console.log(arrDouble);


// ==========================================

const arrD2 = arr.map(function (item, index) {
    return item * 2;
});

console.log(arrD2);
