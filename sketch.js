const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,fairy,E,F,starImage;
var star,text4;

function preload()
{
   //preload the images here
   E=loadAnimation("Elsa1.png","Elsa2.png","Elsa3.png");
   F=loadAnimation("Elsa4.png","Elsa5.png","Elsa6.png");
   G=loadAnimation("Elsa1.png","Elsa1.png");
   starImage=loadImage("Star.png");
   back=loadImage("back.png");
   g1=loadImage("girl1.png");
   t1=loadImage("text1.png");
   g2=loadImage("girl2.png");
   t2=loadImage("text2.png");
   t3=loadImage("text3.png");
   t4=loadImage("text4.png");
   t5=loadImage("text5.png");
   sound1=loadSound("Record.m4a");
   note=loadImage("note.png");
}

function setup() {
  createCanvas(1520,750);
  myengine=Engine.create();
  myworld=myengine.world;

  b=createSprite(760,375,50,50);
  b.addImage("background",back);
  b.scale=1.5;

  fairy=createSprite(350,500,50,50);
  fairy.addAnimation("right",E);
  fairy.addAnimation("left",F);
  fairy.addAnimation("st",G);
  fairy.scale=1;
  fairy.debug=false;
  fairy.setCollider("circle",50,10,30);
  World.add(myworld,fairy)

  girl=createSprite(900,700,50,50);
  girl.addImage("g1",g1);
  girl.addImage("g2",g2);
  girl.scale=0.80;

  text1=createSprite(700,500,50,50);
  text1.addImage("t1",t1);
  text1.scale=0.65;
  text1.lifetime=250;
  sound1.loop();

  note1=createSprite(760,150,50,50);
  note1.addImage("t1",note);
  note1.scale=0.65;
  note1.velocityX=5;

  box=createSprite(1,1,50,50);
  box.visible=false;

  star=createSprite(1300,100,50,50);
  star.addImage("stop",starImage);
  star.scale=0.2;
  World.add(myworld,star)

  var options={
  isStatic:true
  }
  
  starBody=Bodies.rectangle(1300,100,15,15,options);
  World.add(myworld,starBody) 
  
//myworld is myengine's world
 myworld=myengine.world;
}

function draw() {
  background("black");
  Engine.update(myengine);

  
  box.velocityY=1

  if(box.y===250){
    var text2=createSprite(50,200,50,50);
    text2.addImage("t1",t2);
    text2.scale=0.65;
    text2.lifetime=200;
    girl.changeImage("g2",g2);
   

  }
  if(box.y===340){
    var text3=createSprite(700,500,50,50);
    text3.addImage("t3",t3);
    text3.scale=0.65;
    text3.lifetime=300;
  }
  if(box.y===460){
    girl.changeImage("g1",g1);
    var text4=createSprite(100,175,50,50);
    text4.addImage("t4",t4);
    text4.scale=1.3;
    text4.lifetime=740;
  }

  if(keyDown("left")){
    fairy.x=fairy.x-10;
    fairy.changeAnimation("left",F);
  } 
  if(keyDown("right")){
    fairy.x=fairy.x+10;
    fairy.changeAnimation("right",E);
  }
  
  if(keyDown("down")){
    starBody.velocityY=1;
    Matter.Body.setStatic(starBody,isStatic=false)
  }
  if(starBody.position.y>475){
    Matter.Body.setStatic(starBody,isStatic=true)
  }

 
  rectMode(CENTER); 
  rect(star.position.x,star.position.y,10,10);
   
  if(fairy.isTouching(star)){
    fairy.y=700;
    fairy.x=650;
    star.destroy();
     var s=createSprite(885,700,50,50);
     s.addImage("stop",starImage);
     s.scale=0.2
  var text5=createSprite(700,500,50,50);
  text5.addImage("t5",t5);
  text5.scale=0.65;
  text5.lifetime=280;
  fairy.changeAnimation("st",G);
  girl.changeImage("g2",g2);
  }
  rectMode(CENTER); 
  star.x=starBody.position.x
  star.y=starBody.position.y
    
drawSprites();
}