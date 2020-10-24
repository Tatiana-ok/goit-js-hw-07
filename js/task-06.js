const input = document.querySelector('#validation-input');

input.addEventListener('input', isValid);
input.addEventListener('change', change);

function isValid () {
    if (input.value.length > 6){
        input.classList.remove('invalid');
        input.classList.add('valid');
    } if (input.value.length < 6) {
       
        input.classList.add('invalid');
    };
};


function change () {
    input.classList.remove('valid');
    input.classList.remove('invalid');
};