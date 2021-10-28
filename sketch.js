const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var stand1
var score = 0
var slingShot
var polygon_img;
function preload(){
  polygon_img=loadImage("bottle steel.jpeg");
 backgroundimg=loadImage("Background.jfif")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 
  stand1 = new Stand(390,300,250,10);
 
  
  plasticbootle1 = new Block(300,275,30,40);
  plasticbootle2 = new Block(330,275,30,40);
  plasticbootle3 = new Block(360,275,30,40);
  plasticbootle4 = new Block(390,275,30,40);
  plasticbootle5 = new Block(420,275,30,40);
  plasticbootle6 = new Block(450,275,30,40);
  plasticbootle7 = new Block(480,275,30,40);
 
 
  polygon = Bodies.circle(50 ,200,20);
  World.add(world,polygon)

  slingShot = new Slingshot(this.polygon,{x:100, y:200});

}
function draw() {
  background(backgroundimg)
 
  textSize(20);
  ;
  
  

  
  stand1.display();

  strokeWeight(2);
  stroke(15);
 
  plasticbootle1.display();
  plasticbootle2.display();
  plasticbootle3.display();
  plasticbootle4.display();
  plasticbootle5.display();
  plasticbootle6.display();
  plasticbootle7.display();
  
slingShot.display()

  
imageMode (CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,200,200)
//ellipse(0,0,this.r, this.r);
//ellipseMode(CENTER)
text("press the space button to get another change",40,40)
fill("white")

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingShot.fly()
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon)
     
  }
  }