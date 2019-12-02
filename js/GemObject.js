////Gem Class So we can create gems rewards for players

class Gem {
    //Gems Images
    static sprites = ["Gem Blue.png", "Gem Green.png", "Gem Orange.png"];
    static yLocations = [160, 240, 330];
    //Initilizing of variables in gem object
    constructor() {
        var index = parseInt(Math.random() * Gem.sprites.length);
        this.sprite = 'images/' + Gem.sprites[index];
        this.angle = 0;
        this.angleSpeed = -2 + (Math.random() * 4);
        var column = parseInt(Math.random() * 5);
        this.x = 100 * column + 50;
        var yIndex = parseInt(Math.random() * Gem.yLocations.length);
        this.y = Gem.yLocations[yIndex];
    }
    //Render call back to create the gem image in x , y position
    render() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.scale(0.5, 0.5);
        var img = new Image();
        img.src = this.sprite;
        ctx.drawImage(img,-50,-100);
        ctx.restore();
    }
}