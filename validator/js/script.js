'use strict'
const msg1 = 'Поле обов`язкове для заповнення';
const forms = document.forms; //[f, f2, ...]

for (const form of forms) {
    form.addEventListener('submit', function (e) { //Вішаємо обробник події submit
        e.preventDefault(); //Відміна поведінки по замовчуванні

        validate(form);
    });
}

function validate(vForm) {
    const fields = vForm.elements; //[З елементами форми]
    
    for (const field of fields){
        if(field.getAttribute('data-rules') && field.getAttribute('data-rules') === 'required'){ //Працюємо з обовязковими полями
            console.log(isEmpty(field));
        }
    }
}

function isEmpty(inputValue){
    const length = inputValue.value.length;
    if(length === 0){
        showErrors(inputValue, 'error', 'complete', msg1);
        return true;
    }else{
        showErrors(inputValue, 'complete', 'error');
        return false;
    }
}

function showErrors(field, addClass, removeClass, msg = ''){
    field.closest('.field-box').classList.add(addClass);
    field.closest('.field-box').classList.remove(removeClass);
    field.closest('.field-box').querySelector('.error-msg').innerHTML = msg;
}

const send = document.querySelector('.submit');

send.addEventListener('click', function () {
    // console.log('Клік по кнопці');
});