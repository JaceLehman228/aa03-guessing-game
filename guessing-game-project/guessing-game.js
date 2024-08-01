//Initialize 'readline' module and interface
const readline = require('readline') 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Random number variable 
let secretNumber = 0;

//Attempts variable;
let attempts = 5;

//Creates range between minimum and maximum values
function randomInRange(min, max) {
    console.log(`I'm thinking of a number between ${min} and ${max}...`)
    minCeil = Math.ceil(min);
    maxFloor = Math.floor(max);
    secretNumber = Math.floor(Math.random() * (maxFloor - minCeil+1) + minCeil);
    askGuess();
}

//Compares user input to random number 
function checkGuess(guess) {
    if(attempts === 1) {
        console.log(`Uh oh! You lost :( The actual number was ${secretNumber}!`)
        rl.close();
    }
    if(guess > secretNumber) {
        console.log(`${guess} is too high!`);
        attempts -= 1;
        askGuess();
    } else if(guess < secretNumber) {
        console.log(`${guess} is too low!`);
        attempts -= 1;
        askGuess();
    } else {
        console.log('Correct! You win!');
        return true;
    }
    
}

//Asks to input minimum and maximum values for randomInRange(min, max)
function askRange() {
    rl.question('Enter a minimum value: ', minVal => {
        min = minVal;
        rl.question('Enter a maximum value: ', maxVal =>{
            max = maxVal;
            askAttempts();
        });

    })
}

//Asks for amount of attempts wanted for the round
function askAttempts() {
    rl.question('How many attempts would you like? ', numOfAttempts => {
        attempts = numOfAttempts;
        randomInRange(min, max);
    })
}

//Asks user for a number, residing between the given range;
function askGuess() {
   rl.question('Enter a number: ', checkGuess);
}

//Initializes game
askRange();