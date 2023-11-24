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
        }, 1000);        
    }
})