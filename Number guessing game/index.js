// NUMBER GUESSING GAME
const minNum = 1;
const maxNum = 100;
let answer;
let attempts;
let guess;
let running;

function startGame() {
    answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    attempts = 0;
    running = true;
    
    while(running) {
        guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
        guess = Number(guess);
        
        if(isNaN(guess)) {
            window.alert("Please enter a valid number");
        }
        else if(guess < minNum || guess > maxNum) {
            window.alert("Please enter a valid number");
        }
        else {
            attempts++;
            if(guess < answer) {
                window.alert("TOO LOW! TRY AGAIN!");
            }
            else if(guess > answer) {
                window.alert("TOO HIGH! TRY AGAIN!");
            }
            else {
                window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
                running = false;
            }
        }
    }
}