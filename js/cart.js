
// Change quantity of cart
const decrementBtn = document.querySelectorAll('#decrement');
const quantityElem = document.querySelectorAll('#quantity');
const incrementBtn = document.querySelectorAll('#increment');
const priceElem = document.querySelector('.price');
const sumPrice = document.querySelector('.sum-price');

function changeAmount() {
    for (let i = 0; i < incrementBtn.length; i++) {
        incrementBtn[i].addEventListener('click', function () {
            let increment = Number(this.previousElementSibling.innerText);
            increment++;
            this.previousElementSibling.innerText = increment;
            totalCalc();
        });
        decrementBtn[i].addEventListener('click', function () {
            let decrement = Number(this.nextElementSibling.innerText);
            decrement <= 0 ? 1 : decrement--;
            this.nextElementSibling.innerText = decrement;
            totalCalc();
        });
    }
}
changeAmount();
