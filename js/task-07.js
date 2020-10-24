const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

input.setAttribute('min', 12);
input.setAttribute('max', 22);
input.setAttribute('step', 1);

input.addEventListener('input', changeText);

function changeText () {
   text.style.fontSize = `${input.value}px`;
};