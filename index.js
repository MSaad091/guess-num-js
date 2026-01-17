let randomNumber = parseInt(Math.random()*100 + 1 )

const submit =  document.querySelector('#subt')
const userInput =  document.querySelector('#guessfiled')
const guessSlot =  document.querySelector('.guesses')
const  remaining =  document.querySelector('.lastresult')
const lowOrHi = document.querySelector('.loworHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e){
      e.preventDefault();
    const guess = parseInt( userInput.value)
    validateGuess(guess)
    console.log(guess);
    
    })
}

function validateGuess(guess) {
if (isNaN(guess)) {
    alert("PLease Enter a Valid Number")
}else if (guess < 1) {
    alert("PLease Enter a  Number more than 1")
} else if (guess > 100) {
     alert("PLease Enter  Number less than 100")
}else{
    prevGuess.push(guess)
    if (numGuess === 11) {
        displayGuess(guess)
        displayMessage(`Game Over . Random Number Was ${randomNumber}`)
        endGame()
    }
    else{
        displayGuess(guess)
        checkGuess(guess)
    }
}
}

function checkGuess(guess) {
     if (guess === randomNumber) {
        displayMessage(`You Guessed it Right `)
        endGame()
     }else if (guess < randomNumber) {
        displayMessage(`Number is Tooo Low`)
     }else if (guess > randomNumber) {
        displayMessage(`Number is To High`)
     }
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,  `
    numGuess++;
    remaining.innerHTML = `${12- numGuess}` 
}
function newGame() {
   const newGameButton = document.querySelector('#newGame')
   newGameButton.addEventListener('click', function(e){
      e.preventDefault()
       randomNumber = parseInt(Math.random()*100 + 1 );
       prevGuess = [];
       numGuess = 1
       guessSlot.innerHTML  = ''
       remaining.innerHTML = `${11 - guess}`
       userInput.removeAttribute('disabled');
       startOver.removeChild(p)

       playGame = true

   })
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}