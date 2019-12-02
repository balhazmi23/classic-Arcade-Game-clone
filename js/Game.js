
//Declaration of enemies , gems , player and score objects so we can access them in game
var Enemies = [];
var Gems = [];
var player = new Player();
var score = new Score();

//Initlizing of above variables 
function CreateGameObjects() {
    Gems = [];
    Enemies = [];
    for(var i=0; i<4; i++) {
        Gems.push(new Gem());
    }
    PositionsOfEnemy = [160, 240, 330];
    for(var y of PositionsOfEnemy) {
        var x = Math.random() * 200;
        Enemies.push(new Enemy(x, y));
    }
}

//Create Event Listener to capture keyboard keys 
document.addEventListener('keyup', function(e) {
    var Keys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        32: 'space'
    };
    player.Input(Keys[e.keyCode]);
});

CreateGameObjects();