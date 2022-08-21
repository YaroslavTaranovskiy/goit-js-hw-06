let counterValue = 0;

const valEl = document.querySelector('#value');
const decBut = document.querySelector('[data-action="decrement"]');
const incBut = document.querySelector('[data-action="increment"]');

decBut.addEventListener('click', onDecButClick);
incBut.addEventListener('click', onIncButClick);

function onDecButClick() {
    counterValue -= 1;
    valEl.textContent = counterValue;
} 

function onIncButClick() {
    counterValue += 1;
    valEl.textContent = counterValue;
}