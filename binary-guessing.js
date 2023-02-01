//MACHINE GUESSES

let btnStart = document.querySelector('.btn-start')
let mainGuess = document.querySelector('.guessing')
let btnBigger = document.querySelector('.num-bigger')
let btnSmaller = document.querySelector('.num-smaller')
let btnEqual = document.querySelector('.btn-equal')
let machineGuess = document.querySelector('.guess-number')
let maxNumber = document.getElementById('max-value')
let btnRestart = document.getElementById('again')
let label = document.querySelector('.label')
let capi1 = document.getElementById('img1')
let congrats = document.getElementById('congrats')

mainGuess.style.display = `none`
btnRestart.style.display = `none`
capi1.style.opacity = '0%'

let min = 1
let max 
function clearThis(target) {
    target.value= "";
}


btnStart.addEventListener('click', function () {
    
    let numMaxNum = +maxNumber.value
    mainGuess.style.display = `contents`
    btnStart.style.display = `none`
    machineGuess.innerText = Math.floor(Math.random()*(numMaxNum-1))+1
    max = numMaxNum
    

})

btnBigger.addEventListener('click', function() {
    min = +machineGuess.innerText
    let newGuess = Math.floor((min + max)/2)
    machineGuess.innerText = newGuess
    

})



btnSmaller.addEventListener('click', function(){
    max = +machineGuess.innerText
    let newGuess = Math.floor((max + min)/2)
    machineGuess.innerText = newGuess

})



btnEqual.addEventListener('click', function() {
    btnRestart.style.display = `block`
    mainGuess.style.display = `none`
    maxNumber.style.display = `none`
    label.style.display=`none`
    
    congrats.style.display = `block`
    congrats.innerText = `I AM A WINNER!🤟
    YOUR NUMBER IS ${machineGuess.innerText}`
    capi1.style.opacity = '0.8'
   
    
})

btnRestart.addEventListener('click', function() {
clearThis(maxNumber)
maxNumber.style.display =`block`
maxNumber.style.marginLeft = `39%`
label.style.display = `block`
capi1.style.opacity = `0%`
btnRestart.style.display = `none`
congrats.style.display = `none`
btnStart.style.display = `block`
btnStart.style.marginLeft = `43%`
}
)

//YOU GUESS
let maxNumber1 = document.getElementById('max-value1')
let labelMax = document.querySelector('.label-text1')
let btnStart1 = document.querySelector('.btn-start1')
let mainGuess1 = document.querySelector('.guessing1')
let yourGuess = document.getElementById('input-number')
let btnGuess = document.getElementById('btn-guess')
let machineAnswer = document.getElementById('answer')
let youWin = document.getElementById('winner')
let btnRestart1 = document.getElementById('restart')
let machineNumber = document.getElementById('random')
let labelGuess = document.getElementById('number-guess1')
let capi2 = document.getElementById('img2')



mainGuess1.style.display =`none`

btnGuess.style.display = `none`
btnRestart1.style.display = `none`
machineNumber.style.display = `none`
capi2.style.opacity = '0%'

function randomNum(maximum) {
     let num = Math.floor(Math.random()*(maximum-1))+1
     return num
}


btnStart1.addEventListener('click', function(){
    mainGuess1.style.display =`block`
    yourGuess.style.marginRight = `38%`
    btnGuess.style.display = `block`
    btnGuess.style.marginLeft = `44%`
    btnStart1.style.display=`none`
    
     machineNumber.innerHTML = randomNum(maxNumber1.value)
     
})


btnGuess.addEventListener('click', function(){
    
     let numYourGuess = +yourGuess.value
     let numMachineNumber = +machineNumber.innerText
     machineAnswer.style.display = `block`
     if (numYourGuess >= +maxNumber1.value) {
        machineAnswer.style.color = `red`
         machineAnswer.innerText = `ERROR`
     }
     
     else if (numYourGuess > numMachineNumber) {
     
           machineAnswer.innerText = `MY NUMBER IS SMALLER 👇`
     }
     else if (numYourGuess < numMachineNumber) {
       
        machineAnswer.innerText = `MY NUMBER IS BIGGER 👆`
     }
     else {
        mainGuess1.style.display =`none`
        maxNumber1.style.display = `none`
        labelMax.style.display = `none`
        btnGuess.style.display = `none`
        machineAnswer.innerText = `YES, MY NUMBER IS ${numYourGuess}
        YOU WIN 👏`
        btnRestart1.style.display = `block`
        capi2.style.opacity = '0.8'
        
     }
})

btnRestart1.addEventListener('click', function() {
    clearThis(maxNumber1)
    clearThis(yourGuess)
   labelMax.style.display = `block`
   maxNumber1.style.display = `block`
   maxNumber1.style.marginLeft = `38%`
   btnStart1.style.display = `block`
   btnStart1.style.marginLeft = `42%`
   capi2.style.opacity = `0%`
   machineAnswer.style.display = `none`
   btnRestart1.style.display = `none`
   
})





