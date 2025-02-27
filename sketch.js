var score= 0;

var dog,bone;
var dogImg,boneImg;
var ground, invisibleGround;
var bonesGroup;

function preload(){
  dogImg = loadImage("dog.png");
  boneImg = loadImage("bone.png");
}

function setup() {
  createCanvas(600, 200);
  
  dog = createSprite(550,130,20,50);
  dog.addImage(dogImg);
  dog.scale =0.4;
  
  ground = createSprite(200,180,800,20);
  ground.shapeColor="brown";
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  bonesGroup = new Group();
}

function draw() {
  background(255);
  textSize(23);
  text("Puntuación: " + score,30,40);
  
    ground.velocityX = 6;
  
    if (ground.x > 390){
      ground.x = ground.width/2;
    }
  
    dog.collide(invisibleGround);
    spawnBones();
    if(bonesGroup.isTouching(dog)){
    textSize(25);
    text("Se come un hueso :)", 350,40);
    score=score +2;
    }
  
  drawSprites();
}

function spawnBones() {
  // Escribe código aquí para generar los huesos
  if (frameCount % 90 === 0) {
    bone = createSprite(30,160,40,10);
    bone.addImage(boneImg);
    bone.scale =0.1 ;
    bone.velocityX = 3;
    
     // Asigna tiempo de vida a la variable
    bone.lifetime = 155;
    
    bonesGroup.add(bone);
  }
}
