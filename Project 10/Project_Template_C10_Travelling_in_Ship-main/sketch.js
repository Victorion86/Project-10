var ship, sea, shipImage, seaImage

function preload() {

  shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png" );
  seaImage = loadImage("sea.png"); 

}

function setup(){

  createCanvas(400,400);
  sea = createSprite(400, 200);
  sea.scale = 0.5;
  sea.addImage(seaImage);
  sea.velocityX = -3;
  ship = createSprite(120, 200, 40, 40);
  ship.addAnimation("movingShip", shipImage);
  ship.scale = 0.3;

}

function draw() {

  background("blue");

  sea.velocityX = -3;

  if(sea.x < 0){

    sea.x = sea.width/8; 

  }

  drawSprites(); 
 
}