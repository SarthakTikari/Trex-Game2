var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);

  edges = createEdgeSprites();

  //creating ground
  ground=createSprite(300,180,600,10)
  ground.addImage(groundImage)
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
//creating invisible ground
invisibleGround=createSprite(0,200,700,30)
  invisibleGround.visible=false
}


function draw(){
  //set background color 
  background(180);
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed

  //if(trex.collide(invisibleGround)){
    if(keyDown("space") && trex.y>160){
      trex.velocityY = -10;
    }
  //}
  if(ground.x<random(100,200)){
    ground.x=ground.x+width/2
  }
  ground.velocityX= -3
  //console.log(ground.x)
      trex.velocityY = trex.velocityY + 0.5;
    
  
  //stop trex from falling down
  trex.collide(invisibleGround)
  drawSprites();
}