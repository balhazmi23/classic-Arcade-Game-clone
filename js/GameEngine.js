var doc , win , canvas , ctx , lastTime;

//Loading of game engine , to declare and create canvas object that hold the drawings
function GameEngine(global){
    doc = global.document;
    win = global.window;
    canvas = doc.createElement('canvas');
    ctx = canvas.getContext('2d');
    lastTime;
    canvas.width = 505;
    canvas.height = 616;
    doc.body.appendChild(canvas);
    Init();
}

//Initlizing of delta time and pass it to renderer then request the animation frame agian and enter loop mode so we can draw each frame each object in its position
function Init(){
    var now = Date.now();
    if(lastTime == null){
        lastTime = Date.now();
    }
    var dt = (now - lastTime) / 1000.0;
    Update(dt);
    lastTime = now;
    win.requestAnimationFrame(Init);
}

//Updates objects positions and physics based on delta time 
function Update(dt){

    if(player.numberOfLives < 1) { 
        return; 
    }

    if(!player.pauseGame){
        Enemies.forEach(function(enemy) {
            enemy.update(dt);
        });
    }

    for(var i = 0 ; i < Gems.length ; i++){
        var Gem = Gems[i];
        if(Math.abs(Gem.x - player.x) < 50 && Math.abs(Gem.y - player.y)< 50) {
            player.collidedWithGem();
            Gems.splice(i, 1);
        }
    }

    for(var i = 0 ; i < Enemies.length ; i++){
        var Enemy = Enemies[i];
        if(Math.abs(Enemy.x - player.x) < 50 && Math.abs(Enemy.y - player.y)< 50) {
            player.collidedWithEnemey();
        }
    }

    Renderer();
}

//Render every object in game here
function Renderer(){
    
    var rowImages = [
        'images/water-block.png',
        'images/stone-block.png', 
        'images/stone-block.png', 
        'images/stone-block.png',
        'images/grass-block.png',
        'images/grass-block.png' 
    ];
    var numRows = 6;
    var numCols = 5;
    var row; 
    var col;

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for (row = 0; row < numRows; row++) {
        for (col = 0; col < numCols; col++) {
            var img = new Image();
            img.src = rowImages[row];
            ctx.drawImage(img, col * 101, row * 83);
        }
    }

    Gems.forEach(gem => {
        gem.render();
    });

    Enemies.forEach(function(enemy) {
        enemy.render();
    });
    score.render();
    player.render();

}

//Start the engine
GameEngine(this);