const rate = [...document.querySelectorAll('.form__rate-choice')]
const submit = document.querySelector('.form__submit')
let currentRate = undefined
const form = document.querySelector('.form')
const popUp = document.querySelector('.pop-up')

rate.forEach((element) => {
    element.addEventListener('click', () => {
        rate.forEach(test => {
            test.classList.remove('active')
        })
        element.classList.add('active')
        currentRate = element.innerHTML
    })
});

submit.addEventListener('click', () => {
    document.querySelector('.pop-up__youre-rate').textContent = ' ' + currentRate
    popUp.classList.remove('unvisible')
    form.classList.add('unvisible')
});