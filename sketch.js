
var fixedRect,movingRect

function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue"
  movingRect=createSprite(200,200,42,96)
  movingRect.shapeColor="blue"
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  movingRect.debug = true
  fixedRect.debug=true
  console.log(movingRect)
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
  }
  drawSprites();
}