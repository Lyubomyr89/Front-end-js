'use strict'
function random (min = 1, max = 10){
    const r = Math.random();
    // console.log(`min=${min}, max=${max}`, Math.floor(r * (max - min + 1) + min));
    return Math.floor(r * (max - min + 1) + min);
}