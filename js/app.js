// Change width search box
const btnSearch = document.querySelector('.search-box__btn');


// show and hide search box
btnSearch.addEventListener('click', function () {
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})


// Active link 
const linkProduct = document.querySelectorAll('.product__item');

linkProduct.forEach(l => l.addEventListener('click', function () {
    linkProduct.forEach(l => l.classList.remove('active-product'));
    this.classList.add('active-product');
}));