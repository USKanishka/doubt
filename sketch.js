
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,groundO,paperO,dustbinO;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
	
	paperO=new paper(200,450,40);
	groundO=new ground(width/2,670,width,20);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  dustbinO.display();
  paperO.display();
  groundO.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paperO.body,paperO.body.position,{x:85,y:-85});
  
  }
}

