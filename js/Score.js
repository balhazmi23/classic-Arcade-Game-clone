//Score Class that display the game information on canvas
class Score {

    Wins = 0;
    Losts = 0;

    constructor() {
        this.startOver();
    }
    
    startOver() {
        this.gemScore = 0;
    }

    //Render the text each on its position
    render() {
        ctx.font = "30px Arial";
        ctx.fillText(`Lives: ${player.numberOfLives}`, 0, 40);
        ctx.fillText(`Score: ${this.gemScore}`, 130, 40);
        ctx.fillText(`Wins: ${this.Wins}`, 280, 40);
        ctx.fillText(`Losts: ${this.Losts}`, 390, 40);
        if(player.numberOfLives < 1) { 
            player.gameIsOver();
            this.Losts = this.Losts + 1;
            this.LostMessage();
        }
        if(Gems.length == 0) {
            if(player.pauseGame == false){
                this.Wins = this.Wins + 1;
            }
            player.gameIsWon();
            
            this.WinMessage();
        }
    }

    //When Player win show this message
    WinMessage() {
        ctx.font = "25px Arial";
        ctx.fillText("You Win !", 200, 610);
    }

    //When Player loss show this message
    LostMessage() {
        ctx.font = "25px Arial";
        ctx.fillText("You Lost !", 200, 610);
    }

    increase() {
        this.gemScore += 50;
    }
}