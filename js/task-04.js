let counterValue = 0;

const increment = function () {
    counterValue += 1;
};

const decrement = function () {
    counterValue -= 1;
};


const plusBtn = document.querySelector('[data-action=increment]');
const minusBtn = document.querySelector('[data-action=decrement]');

plusBtn.addEventListener('click', () => {
    increment();
    updateCounter();
});

minusBtn.addEventListener('click', () => {
    decrement();
    updateCounter();
});

const updateCounter = function() {
    value.textContent = counterValue;
};

