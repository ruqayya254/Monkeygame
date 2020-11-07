var PLAY = 1;
var END = 0;
var gameState = PLAY;
var survivalTime=1;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
   
  

  
  bananasGroup=new Group();
  obstaclesGroup=new Group();
  
  monkey.setCollider("circle",0,0,60);
  monkey.debug = true
}
  


function draw() {
  background("white")
 
  
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -13;
  }
  monkey.velocityY= monkey.velocityY + 0.5;

  
  if (ground.x<0){
    ground.x=ground.width/2    
      }
   monkey.collide(ground);
 spawnObstacles();
  food();
  
 
  
  
  
  
  
   stroke("white");
  textSize(20);
  fill("white");
  text("score: "+score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime,100,50);
  
  if (obstaclesGroup.isTouching(monkey)){
      ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        bananasGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        bananasGroup.setLifetimeEach(-1);
    } 
  
 
  
  
  
  drawSprites();
}
function food(){
  if (frameCount%80===0){
    banana=createSprite(400,165,10,40)
    banana.addImage(bananaImage);
    banana .velocityX = -6;
    banana.scale = 0.1;
    var rand=Math.round(random(120,200));
    banana.lifetime = 50; 
    bananasGroup.add(banana)
      } 
}

function spawnObstacles(){
  if (frameCount%300===0){
    obstacle=createSprite(800,320,10,40)
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.2;
   
    obstacle.lifetime = 80; 
    obstaclesGroup.add(obstacle)
     obstacle.lifetime = 300;
    
      } 
  
  
}







