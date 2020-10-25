const input = document.querySelector('#validation-input');

input.addEventListener('change', isValid);

function isValid () {
    console.log(input.value.length);
    if (input.value.length == input.dataset.length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    };
};

input.addEventListener('input', change);

function change () {
    input.classList.remove('valid');
    input.classList.remove('invalid');
};