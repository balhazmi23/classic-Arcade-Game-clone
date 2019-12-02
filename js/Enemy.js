//Enemy Class So we can create enemy objects and store them in array
class Enemy {

    //Constructer of enemy object with image loading and x , y and velocity setup
    constructor(x, y) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.velocity = 100 + (Math.random() * 100); 
    }
    //Refresher of the enemy image in x,y every frame
    update(dt) {
        this.x += this.velocity * dt ;
        if (this.x > ctx.canvas.width + 50) {
            this.x = -100;
        }
    }
    //Renderer of Image every frame
    render() {
        var img = new Image();
        img.src = this.sprite;
        ctx.drawImage(img, this.x - 50, this.y-100);
    }
    
};

