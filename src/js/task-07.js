const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', onBlur);

function onBlur(a) {
    span.style.fontSize = a.currentTarget.value + 'px';
}

