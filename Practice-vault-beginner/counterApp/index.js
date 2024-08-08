const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const counter = document.querySelector('.counter');

const max = 10;
const min = -10;
let currentNum = Number(counter.innerHTML);

plusBtn.addEventListener('click', () => {
    currentNum++;
    if (currentNum > max) {
        currentNum--;
    } else {
        counter.innerHTML = currentNum;
    }
});

minusBtn.addEventListener('click', () => {
    currentNum--;
    if (currentNum < min) {
        currentNum++;
    } else {
        counter.innerHTML = currentNum;
    }
});