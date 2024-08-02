class Game {

    private maxAttempts: number;
    private targetNumber: number;

    constructor(maxAttemps: number = 3) {
        this.maxAttempts = maxAttemps;
        this.targetNumber = Math.floor(Math.random() * 10) + 1;
    }


    public playGame() {
        let attempts = 0;

        while (attempts < this.maxAttempts) {
            const guess = prompt("Guess a number betweend 1 and 10;");
            const guessedNumber = parseInt(guess, 10);
            if(guessedNumber === this.targetNumber ) {
                alert("Congratulations");
            }else{
                alert("Wrong guess.")
            }
            attempts++ ;
        }
        alert('You lost');
    }
}

const  game = new Game();
game.playGame();