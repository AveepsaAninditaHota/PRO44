//Create Variables
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var spaceShip , spaceShipImg;
var ground, invisibleEdge, groundImage;
var inv_ground
var invisibleEdge1

var asteroidGroup, asteroidImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3;

var score;
var gameOver, gameOverImg
var restart,restartImg


var bg,bgimg;
var starting,startingImg;
var highScore = 0
var maxhighScore = 0

var bkg,bkgimg

function preload(){
spaceShipImg = loadImage("spaceship.png");
bkgimg = loadAnimation("space6.gif","space5.gif","space4.gif","space3.gif","space2.gif","space1.gif")
restartImg=loadImage("restart.png")
startingImg = loadAnimation("starting.jpg")
asteroidImage = loadImage("asteroid.png"); 
obstacle1 = loadImage("light_blue.png");
obstacle2 = loadImage("light_blue.png");
obstacle3 = loadImage("light_blue.png");
 
gameOverImg = loadImage("gameOver.jpg")
  


}

function setup() {
createCanvas(1200, 600);

inv_ground = createSprite(200,200,400,10);
  inv_ground.visible = false;
inv_ground.lifetime = 126
  
  spaceShip = createSprite(100,160,20,50);
  spaceShip.addImage("player",spaceShipImg);
  spaceShip.scale = 0.3;

  bkg = createSprite(600,300,600,300)
  bkg.addAnimation("bacground",bkgimg)
  bkg.scale  = 2.5

  starting = createSprite(width/2,height/2,40,40)
  starting.addAnimation("start",startingImg)
  starting.lifetime = 90
  starting.scale=3;


  gameOver = createSprite(width/2-25,height/2);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 2;
  
  restart= createSprite(width/2-25,height/2);
  restart.addImage(restartImg);
  restart.scale=1;
  
 
 
  invisibleEdge = createSprite(200,20,400,10);
  invisibleEdge.visible = false;
  
  invisibleEdge1 = createSprite(200,590,400,10);
  invisibleEdge1.visible = false


  obstaclesGroup = createGroup();
  asteroidGroup = createGroup();

  
  spaceShip.setCollider("rectangle",0,0,spaceShip.width,spaceShip.height);
  spaceShip.debug = false

 
  
}

function draw() {
background(180);

  if(gameState === PLAY){
    gameOver.visible = false;
   restart.visible = false;
    
    if(keyDown("space")) {
        spaceShip.velocityY = -9;
      
    }
    spaceShip.depth = bkg.depth
    spaceShip.depth+=2
    
    spaceShip.velocityY = spaceShip.velocityY + 0.5
  
  
  spawnAsteroid();
 difficulties();
  spawnObstacles();
  obst();
  obst1()
  obst2();
  obst3();

if(obstaclesGroup.isTouching(spaceShip)){
        gameState = END
    }

    if(invisibleEdge1.isTouching(spaceShip)){
        gameState = END
    }
  
   else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
   
     
    obstaclesGroup.depth = gameOver.depth
    gameOver.depth+=2
    restart.depth +=2
  

    spaceShip.velocityY = 0
     
  
    obstaclesGroup.setLifetimeEach(-1);
    asteroidGroup.setLifetimeEach(-1);
     
    obstaclesGroup.setVelocityXEach(0);
    asteroidGroup.setVelocityXEach(0);  
     
    if(mousePressedOver(restart))
    {
   reset()
   }
  }
  
  spaceShip.collide(invisibleEdge)
  spaceShip.collide(inv_ground)

 

  drawSprites();
}
function reset()
{
  gameState = PLAY;
  gameOver.visible = false;
  restart.visible = false;
  obstaclesGroup.destroyEach();
  asteroidGroup.destroyEach();

 
  score = 0;
}


function spawnObstacles(){
 if (frameCount % 110 === 0){
  var obstacle = createSprite(1000,145,10,40);
  obstacle.velocityX = -12
   
  
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      default: break;
    }
  
            
  obstacle.scale = 0.1;
  obstacle.lifetime = 300;
   
 
  obstaclesGroup.add(obstacle);

 }
}
function obst2(){
  if (frameCount % 110 === 0){
   var obstacle = createSprite(1000,75,10,40);
   obstacle.velocityX = -12

     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       default: break;
     }
   
             
   obstacle.scale = 0.1;
   obstacle.lifetime = 300;
   obstaclesGroup.add(obstacle);
 
  }
 }
function obst1(){
  if (frameCount % 110 === 0){
   var obs = createSprite(1000,500,10,40);
   obs.velocityX = -12
    

     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obs.addImage(obstacle1);
               break;
       case 2: obs.addImage(obstacle2);
               break;
       case 3: obs.addImage(obstacle3);
               break;
       default: break;
     }
   
   
      
   obs.scale = 0.1;
   obs.lifetime = 300;
    

   obstaclesGroup.add(obs);
 
  }
 }
function obst(){
  if(frameCount % 110 === 0){
    var difficulty = createSprite(1450,105,10,150);
    difficulty.velocityX = -12

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: difficulty.addImage(obstacle1);
              break;
      case 2: difficulty.addImage(obstacle2);
              break;
      case 3: difficulty.addImage(obstacle3);
              break;
      default: break;
    }
    difficulty.scale = 0.1;
    difficulty.lifetime = 300;
  
    obstaclesGroup.add(difficulty);
  }  
  }
  function obst3(){
    if(frameCount % 110 === 0){
      var difficulty = createSprite(1450,600,10,150);
      difficulty.velocityX = -12
  
      var rand = Math.round(random(1,3));
      switch(rand) {
        case 1: difficulty.addImage(obstacle1);
                break;
        case 2: difficulty.addImage(obstacle2);
                break;
        case 3: difficulty.addImage(obstacle3);
                break;
        default: break;
      }
      difficulty.scale = 0.1;
      difficulty.lifetime = 300;
     
           obstaclesGroup.add(difficulty);
    }  
    }
function difficulties(){
  if(frameCount % 120 === 0){
    var difficulty = createSprite(1450,225,10,150);
    difficulty.velocityX = -12

    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: difficulty.addImage(obstacle1);
              break;
      case 2: difficulty.addImage(obstacle2);
              break;
      case 3: difficulty.addImage(obstacle3);
              break;
      default: break;
    }
    difficulty.scale = 0.1;
    difficulty.lifetime = 300;
   
  
    obstaclesGroup.add(difficulty);
  }  
  }
  
  
   
function spawnAsteroid() {

  if (frameCount % 80 === 0) {
    var asteroid = createSprite(600,120,40,10);
    asteroid.y = Math.round(random(80,400));
    asteroid.addImage(asteroidImage);
    asteroid.velocityX = -3;

  
    asteroid.lifetime = 200;
    asteroid.scale = 0.08

    asteroid.depth = spaceShip.depth;
    spaceShip.depth = spaceShip.depth + 1;
    

  asteroidGroup.add(asteroid);

  }
}
}
