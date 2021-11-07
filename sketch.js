var track,trackImg;
var boy,boyImg;
var edge1,edge2; 

function preload(){
 trackImg =  loadImage("path.png");
 boyImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,1200);
  track = createSprite(200,600);
  track.addImage(trackImg);
  track.scale = 1.2;

  boy = createSprite(100,300)
  boy.addAnimation("running",boyImg)
  boy.scale = 0.08;

  edge1 = createSprite(0,0,100,800);
  edge1.visible = false;

  edge2 = createSprite(410,0,100,800);
  edge2.visible = false;
}

function draw() {
  background(0);
  track.velocityY = 4;
  if(track.y > 650){
   track.y = height/2;
  }
  boy.x = World.mouseX;
  boy.collide(edge1);
  boy.collide(edge2);

 drawSprites();
}
