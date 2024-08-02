var Game = /** @class */ (function () {
    function Game(maxAttemps) {
        if (maxAttemps === void 0) { maxAttemps = 3; }
        this.maxAttempts = maxAttemps;
        this.targetNumber = Math.floor(Math.random() * 10) + 1;
    }
    Game.prototype.playGame = function () {
        var attempts = 0;
        while (attempts < this.maxAttempts) {
            var guess = prompt("Guess a number betweend 1 and 10;");
            var guessedNumber = parseInt(guess, 10);
            if (guessedNumber === this.targetNumber) {
                alert("Congratulations");
            }
            else {
                alert("Wrong guess.");
            }
            attempts++;
        }
        alert('You lost');
    };
    return Game;
}());
var game = new Game();
game.playGame();
