const Engine=Matter.Engine
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var snow=[];
function preload() {

  backGround=loadImage("snow2.jpg");
  
  fairyImg=loadImage("fairyImage1.png");

}


function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  fairy = createSprite(400, 200, 50, 50);
  fairy.addImage(fairyImg);
  fairy.scale=0.2;
  
  if(frameCount%350===0){
    for(var i=0;i<60;i++){
      snow.push(new snowFlakes(random(0,800),random(0,400)));
    }
  }
  

}



function draw() {
  background(backGround);  
  
  Engine.update(engine);
  
  for(var i=0;i<snow.length;i++){
    snow[i].display();
    snow[i].update();
    Matter.Body.setVelocity(snow[i].body,{x:0,y:1});
  }

  drawSprites();
}