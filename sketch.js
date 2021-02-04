
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var side1,side2,bottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	side1=createSprite(650,640,20,60);

	bottom=createSprite(600,640,80,20);

	side2=createSprite(550,640,20,60);

	paper=createSprite(100,640,20,20);
	paper.shapeColor= "white";
	ground= createSprite(400,660,800,20);
	ground.shapeColor= "red";
	engine = Engine.create();
	world = engine.world;

	




	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  

  
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.x, paper.body.y,{x:85,y:-85});

	}
}



