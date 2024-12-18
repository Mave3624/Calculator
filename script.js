const degit = document.querySelectorAll('.number')  //Array
const operate = document.querySelectorAll('.operate')  //Array
const equals = document.querySelector('.equals')
const display = document.querySelector('.output')
const cleanAll = document.querySelector('.cleanAll')
const persentage = document.querySelector('.pesentage')
const negitive = document.querySelector('.negitive')
const clean = document.querySelector('.clean')
const dot = document.querySelector('.dot')
let operatorChecker 

let firstInput = ''
let secondInput = ''
let operator

let operation = function(firstInput, operator, secondInput) {
    firstInput = Number(firstInput)
    secondInput = Number(secondInput)
    switch(operator) {
        case '+':
            return (firstInput + secondInput)
        case '-':
            return (firstInput - secondInput)
        case '/':
            return (firstInput / secondInput)
        case '*':
            return (firstInput * secondInput)
        case '%':
            return ((firstInput / 100) * secondInput)
        case undefined :
            return secondInput
    }
}
degit.forEach((number) => { 
    number.addEventListener('click', function click() {
        //keeps the result on the screen till a number is clicked
        if (operatorChecker === 0 ) display.textContent = 0
        operatorChecker = 1

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
        if (display.textContent.slice(0,1) === '-') display.innerHTML = display.textContent.slice(0,10); else display.innerHTML = display.textContent.slice(0,9)
    })
})
cleanAll.addEventListener('click', () => {
    firstInput = ''
    secondInput = ''
    operator = undefined
    display.innerHTML = 0
})
clean.addEventListener('click', () => {
    if (display.textContent.includes('In') || display.textContent.includes('a')) {
        firstInput = ''
        secondInput = ''
        operator = undefined
        display.innerHTML = 0
    }
    display.innerHTML = display.textContent.slice(0,(display.textContent.length - 1))
    if (display.textContent === '') display.innerHTML = 0
})
persentage.addEventListener('click', () => {
    firstInput = display.textContent
    operator = persentage.textContent
    operatorChecker = 0
})
equals.addEventListener('click', () => {
    secondInput = display.textContent;
    if (display.textContent.includes('I')) secondInput = 0
    secondInput === '0' && operator === '/' ? display.innerHTML = 'Invalid':
    display.innerHTML = operation(firstInput, operator, secondInput);
        if (display.textContent.slice(0,1) === '-') display.innerHTML = display.textContent.slice(0,10); else display.innerHTML = display.textContent.slice(0,9)
    firstInput = ''
    secondInput = ''
    operator = undefined
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
    opera.addEventListener('click', () => {
        operatorChecker = 0;
        (firstInput === '') ? firstInput = display.textContent: secondInput = display.textContent;
        if ((firstInput) !== '' && secondInput !== '' && secondInput !== '0') display.textContent = operation(firstInput, operator, secondInput)
        if (display.textContent.slice(0,1) === '-') display.innerHTML = display.textContent.slice(0,10); else display.innerHTML = display.textContent.slice(0,9)
            operator = opera.textContent
        if(display.textContent.includes('a'))  {
            firstInput = ''
            operator = undefined
        }
        if (display.textContent !== undefined || NaN || 'Invalid' || null) firstInput = display.textContent
    })
})