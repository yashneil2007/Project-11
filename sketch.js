var ship,ship_floating, ship_collided;
var ground, invisibleGround, groundImage;

function preload()
{
  ship_floating = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4png");
  ship_collided = loadAnimation("ship_collided.png");

  groundImage = loadImage("sea.png");
}

function setup()
{
  createCanvas(400,400);
  
  //create a ship sprite
  ship = createsprite(50,160,20,50);
  ship.addAnimation("floating",ship_floating);

  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocity = -4;

  invisibleGround=createsprite(200,190,400,10);

  invisibleGround.visible=false;

}

function draw() 
{
  background("blue");

  console.log(ship.y)

  trex.collide(invisibleGround);
  drawSprites;
}