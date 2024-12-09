const degit = document.querySelectorAll('.number')  //Array
const operate = document.querySelectorAll('.operate')  //Array
const equals = document.querySelector('.equals')
const display = document.querySelector('.output')
const cleanAll = document.querySelector('.cleanAll')
const persentage = document.querySelector('.pesentage')
const negitive = document.querySelector('.negitive')
const clean = document.querySelector('.clean')
const dot = document.querySelector('.dot')

let firstInput
let secondInput 
let operator

let operation = function(firstInput, operator, secondInput) {
    let a = Number(firstInput)
    let b = Number(secondInput)

    switch(operator) {
        case '+':
            return (a + b)
        case '-':
            return (a - b)
        case '/':
            return (a / b)
        case '*':
            return (a * b)
        case '%':
            return ((a / 100) * b)
        case undefined:
            return b
    }
}
degit.forEach((number) => { 
    number.addEventListener('click', function click() {
        //keeps the result on the screen till a number is clicked
        if (display.textContent === firstInput) display.textContent = 0

        display.innerHTML += number.textContent
        //removes excess zero(0)
            if  (display.textContent.slice(0,1) === '0' && display.textContent.slice(1,2) !== '.') {
                    display.innerHTML = display.innerHTML.slice(1)
                }

            if  (display.textContent.includes('-') && display.textContent.slice(1,2) === '0' && display.textContent.slice(2,3) !== '.') {
                    display.innerHTML = display.textContent.slice(0,1) + display.textContent.slice(2)
                }
        //removes latters 
            if (display.textContent === 'Invalid'+number.textContent) {
                display.textContent = number.textContent
            }
        //check the length of input
            if (display.textContent.length = 9) {
                display.innerHTML = display.textContent.slice(0,9)
            }
    })
})
cleanAll.addEventListener('click', () => {
    firstInput = ''
    secondInput = ''
    operator = ''
    a = 0
    display.innerHTML = 0
})
clean.addEventListener('click', () => {
    if (display.textContent.includes('In')) {display.innerHTML = 0}
    display.innerHTML = display.textContent.slice(0,(display.textContent.length - 1))
    if (display.textContent === '') display.innerHTML = 0
})
persentage.addEventListener('click', () => {
    firstInput = display.textContent
    operator = persentage.textContent
})
equals.addEventListener('click', () => {
    secondInput = display.textContent;
    (secondInput === '0' && operator === '/') ? display.innerHTML = 'Invalid':
    display.innerHTML = operation(firstInput, operator, secondInput);
    if (display.textContent.length = 9) {
        display.innerHTML = display.textContent.slice(0,9)
    }
    a = 0

})
negitive.addEventListener('click', () => {
    display.textContent.includes('-') ? display.innerHTML = display.textContent.slice(1):
    display.innerHTML = '-' + display.textContent;
})
dot.addEventListener('click', () => {
    display.textContent.includes('.') ? dot.disenbled = true:
    display.innerHTML = display.textContent + '.';
})
let a = 0
operate.forEach((opera) => {
    opera.addEventListener('click', () => {
        a++
        a === 1 ? firstInput = display.textContent: secondInput = display.textContent;

        if (a > 1 && secondInput !== undefined) {
            display.textContent = operation(firstInput, operator, secondInput)
        }
        if (display.textContent.length = 9) {
            display.innerHTML = display.textContent.slice(0,9)
        }
         operator = opera.textContent
         firstInput = display.textContent
    })
})