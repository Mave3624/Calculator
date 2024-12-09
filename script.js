const degit = document.querySelectorAll('.number')
const operate = document.querySelectorAll('.operate')
const equals = document.querySelector('.equals')
const display = document.querySelector('.output')
const cleanAll = document.querySelector('.cleanAll')
const pesentage = document.querySelector('.pesentage')
const negitive = document.querySelector('.negitive')
const clean = document.querySelector('.clean')
const dot = document.querySelector('.dot')

let firstInput 
let secondInput 
let operator

let opera = function(firstInput, operator, secondInput) {
    let a = Number(firstInput)
    let b = Number(secondInput)
//error here
    switch(operator) {
        case '+':
            return ((a + b).length > 9) ? (a + b).toPrecision(8): a + b;
        case '-':
            return (a - b).toPrecision(9)
        case '/':
            return (a / b).toPrecision(9)
        case '*':
            return (a * b).toPrecision(9)
        case '%':
            return ((a / 100) * b).toPrecision(9)
        case undefined:
            return b
    }
}
degit.forEach((number) => { 
    number.addEventListener('click', function click() {
        display.innerHTML += number.textContent
            if  (display.textContent.slice(0,1) === '0' && display.textContent.slice(1,2) !== '.') {
                    display.innerHTML = display.innerHTML.slice(1)
                }
            if  (display.textContent.includes('-') && display.textContent.slice(1,2) === '0' && display.textContent.slice(2,3) !== '.') {
                    display.innerHTML = display.textContent.slice(0,1) + display.textContent.slice(2)
                }
            if (display.textContent === 'Invalid'+number.textContent) {
                display.textContent = number.textContent
            }
            if (display.textContent.length = 9) {
                display.innerHTML = display.textContent.slice(0,9)
            }
    })
})
cleanAll.addEventListener('click', () => {
    firstInput = ''
    secondInput = ''
    operator = ''
    display.innerHTML = 0
})
clean.addEventListener('click', () => {
    display.innerHTML = display.textContent.slice(0,(display.textContent.length - 1))
    if (display.textContent === '') display.innerHTML = 0
})
pesentage.addEventListener('click', () => {
    firstInput = display.textContent
    operator = pesentage.textContent
    display.innerHTML = ''
})
equals.addEventListener('click', () => {
    secondInput = display.textContent 
        secondInput === '0' && operator === '/' ? display.innerHTML = 'Invalid':
    display.innerHTML = opera(firstInput, operator, secondInput);
    firstInput = display.textContent
})
negitive.addEventListener('click', () => {
    display.textContent.includes('-') ? display.innerHTML = display.textContent.slice(1):
    display.innerHTML = '-' + display.textContent;
})
dot.addEventListener('click', () => {
    display.textContent.includes('.') ? dot.disenbled = true:
    display.innerHTML = display.textContent + '.';
})

operate.forEach((opera) => {
//error here
    opera.addEventListener('click', () => {
        firstInput = display.textContent
        operator = opera.textContent
        display.innerHTML = 0
    })
})

