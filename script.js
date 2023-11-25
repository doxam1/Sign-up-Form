const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirmPassword');
const submitBtn = document.querySelector('.signUpBtn');
const errorMsg = document.querySelector('.passErrorMsg')


confirmPass.addEventListener ('input', (e) => {
    if (confirmPass.value == password.value) {
        confirmPass.classList.remove('passNotConfirmed');
    } else {
        confirmPass.classList.add('passNotConfirmed');
    }
})

submitBtn.addEventListener('click', (e) => {
    if (confirmPass.value != password.value) {
        e.preventDefault();
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '.8rem';
        errorMsg.textContent = '*passwords do not match'
        setTimeout(() => {
            errorMsg.textContent = '';
        }, 1800);        
    }
})

const showHidePass = document.querySelector('.showHidePass');
let passShow = false;

window.onload = () => showHidePass.style.background = 'right/80% no-repeat url("./img/eye.svg")';

password.addEventListener('mouseover', () => {
    if (passShow == false) {
    showHidePass.style.background = 'right/80% no-repeat url("./img/eye.svg")';
    } else if (passShow == true) {
        showHidePass.style.background = 'right/80% no-repeat url("./img/eye-off.svg")';
    }
})

showHidePass.addEventListener('click', ()=> {
    if (passShow == false) {
        showHidePass.style.background = 'right/80% no-repeat url("./img/eye-off.svg")';
        password.setAttribute('type', 'text');
        passShow = true;
    } else if (passShow == true) {
        showHidePass.style.background = 'right/80% no-repeat url("./img/eye.svg")'
        password.setAttribute('type', 'password');
        passShow = false;
    }});

// passLine.addEventListener('mouseout', ()=> passShowImg.style.background = '')