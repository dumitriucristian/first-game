"use strict";
class Game {
    constructor(maxAttemps = 3) {
        this.maxAttempts = maxAttemps;
        this.targetNumber = Math.floor(Math.random() * 10) + 1;
    }
    playGame() {
        let attempts = 0;
        while (attempts < this.maxAttempts) {
            const guess = prompt("Guess a number betweend 1 and 10;");
            const guessedNumber = parseInt(guess !== null && guess !== void 0 ? guess : '', 10);
            if (guessedNumber === this.targetNumber) {
                alert("Congratulations");
            }
            else {
                alert("Wrong guess.");
            }
            attempts++;
        }
        alert('You lost');
    }
}
const game = new Game();
game.playGame();
