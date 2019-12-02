//Player Class Object
class Player {

    //Load Player image and set player's lives
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.numberOfLives = 3;
        this.startOver();
    }

    //When Game is over pause the game 
    gameIsOver() {
        this.pauseGame = true;
        this.winner = false;
    }

    //When Game is won pause the game
    gameIsWon() {
        this.pauseGame = true;
        this.winner = true;
       
    }

    //Reset Player Position
    startOver() {
        this.x = 250;
        this.y = 500;
        this.pauseGame = false;
        this.winner = false;
    }

    //when player collide with enemy decrement live
    collidedWithEnemey() {
        this.numberOfLives -= 1;
        if(this.numberOfLives>0) {
            this.startOver();
        }else{
            CreateGameObjects();
        }
    }

    //when player collide with gems incrment score
    collidedWithGem() {
        score.increase();
    }

    //Render each object
    render() {
        var img = new Image();
        img.src = this.sprite;
        ctx.drawImage(img, this.x-50, this.y-100);
    }

    //Change player position based on keyboard input
    Input(direction) {
        if(this.pauseGame) { 
            if(direction=='space') {
                if(this.winner) {
                    CreateGameObjects();
                    score.startOver();
                }
                this.numberOfLives = 3;
                this.startOver();
  
            } else {
                return; 
            }
        }

        switch(direction) {
            case "right":
                if(this.x<400) {
                    this.x += 100;
                }
                
                break;
            case "left":
                if(this.x>50) {
                    this.x -= 100;
                }
                
                break;
            case "up":
                if(this.y>100) {
                    this.y -= 82;
                }
                
                break;
            case "down":
                if(this.y<500) {
                    this.y += 82;
                }
                
                break;
            default:
                break;
        }
    }
}