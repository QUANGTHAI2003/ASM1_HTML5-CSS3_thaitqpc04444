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

// check input
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput) {
    let isRequired = false;
    listInput.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `Bạn chưa nhập ${getFieldName(input)}`);
            isRequired = true;
        } else {
            showSuccess(input);
        }
    });
    return isRequired;
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function checkEmailError(input) {
    const regexEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);
    if (regexEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email không hợp lệ');
    }
    return isEmailError;
}

function checkLength(input, min, max) {
    input.value = input.value.trim();
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} phải có ít nhất ${min} kí tự`);
        return true;
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} phải có ít hơn ${max} kí tự`);
        return true;
    } else {
        return false;
    }
}

function checkMatchPasswordError(passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Password không trùng khớp');
        return true;
    } else {
        return false;
    }
}

form.addEventListener('change', function (e) {
    e.preventDefault();
    checkEmptyError([username, email, password, confirmPassword]);
    checkEmailError(email);
    checkLength(username, 5, 15);
    checkLength(password, 8, 20);
    checkMatchPasswordError(password, confirmPassword);
})
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkEmptyError([username, email, password, confirmPassword]);
    checkEmailError(email);
    checkLength(username, 5, 15);
    checkLength(password, 8, 20);
    checkMatchPasswordError(password, confirmPassword);
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const indents = $$('.indent')
const infos = $$('.info-item')

indents.forEach((tab, index) => {
    const info = infos[index];
    tab.onclick = function () {
        $('.indent.change').classList.remove('change');
        $('.info-item.change').classList.remove('change');
        this.classList.add('change')
        info.classList.add('change')
    }
})


$('.menu').addEventListener('click', () => {
    $('.nav').classList.add('show-menu');
})

$('.close').addEventListener('click', () => {
    $('.nav').classList.remove('show-menu');
})

var down = document.querySelector('.main-subnav');
console.log(down);
var subNav = document.querySelector('.subnav');
console.log(subNav);

down.addEventListener('click', function () {
    subNav.classList.toggle('show-menu');

});

var btnFooter = document.querySelectorAll('.ft h4');
var ftList = document.querySelector('.footer .footer-list:not(:first-child)');


// btnFooter.addEventListener('click', function () {
//     ftList.classList.toggle('show-list');
//     console.log(this);
// })

btnFooter.forEach(ftBtn => {
    ftBtn.addEventListener('click', function () {
        ftList.classList.toggle('show-list');
    })
})