var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var package,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
}

function setup() {
	createCanvas(800, 700);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	package = new Package(400,250,30,30);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 670, width, 10 , {isStatic:true} );
	 World.add(world, ground);


 	boxPosition=width/2-100
 	boxY=610;

 	boxLeftBody = Bodies.rectangle(boxPosition+10, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, 650, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);
 	
 	boxRightBody = Bodies.rectangle(boxPosition+200-10 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  background(0);

	var groundpos = ground.position;
	var leftboxpos = boxLeftBody.position;
	var rightboxpos = boxRightBody.position;
	var bottombase = boxBottomBody.position;

	fill("red");
	rectMode(CENTER);
	rect(bottombase.x,bottombase.y,200,20);
	rectMode(CENTER);
	rect(leftboxpos.x,leftboxpos.y,20,100);
	rectMode(CENTER);
	rect(rightboxpos.x,rightboxpos.y,20,100);
	


	fill("white");
	rectMode(CENTER);
	rect(groundpos.x,groundpos.y,width,20);
	drawSprites();
  
  if (keyCode === DOWN_ARROW) {

	Body.setStatic(package.body,false);
    package.display();
    
  }
  
  console.log(package.body.position)
}



