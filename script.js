const degit = document.querySelectorAll('.number')
const operate = document.querySelectorAll('.operate')
const equals = document.querySelector('.equals')
const display = document.querySelector('.output')
const clean = document.querySelector('.cleanAll')
const pesentage = document.querySelector('.pesentage')
const negitive = document.querySelector('.negitive')

let firstInput 
let secondInput 
let operator 

let opera = function(firstInput, operator, secondInput) {
    let a = Number(firstInput)
    let b = Number(secondInput)

    switch(operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '/':
            return a / b
        case '*':
            return a * b
        case '%':
            return (a / 100) * b
        default:
            return 'Error'
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
    })
})
clean.addEventListener('click', () => {
    firstInput = ''
    secondInput = ''
    operator = ''
    display.innerHTML = 0
})
pesentage.addEventListener('click', () => {
    firstInput = display.textContent
    operator = pesentage.textContent
    display.innerHTML = ''
})
equals.addEventListener('click', () => {
    secondInput = display.textContent
    display.innerHTML = opera(firstInput, operator, secondInput)
    firstInput = display.textContent
})
negitive.addEventListener('click', () => {
    display.textContent.includes('-') ? display.innerHTML = display.textContent.slice(1):
    display.innerHTML = '-' + display.textContent;
})

operate.forEach((opera) => {
    opera.addEventListener('click', () => {
        firstInput = display.textContent
        operator = opera.textContent
        display.innerHTML = ''
    })
})