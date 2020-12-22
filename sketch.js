const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Base (350,100,500,20);
	var groundX = ground.body.position.x;
	var bobDiameter = 50;

	// bob1 = new Bob (groundX + (2*bobDiameter - 120),200,50);
	// rope1 = new Rope (bob1.body,ground.body,-bobDiameter/2,0);

    // bob2 = new Bob (groundX + (-bobDiameter),200,50);
	// rope2 = new Rope (bob2.body,ground.body,-bobDiameter,0);

	bob1 = new Bob (groundX + (-2*bobDiameter),200,50);
	rope1 = new Rope (bob1.body,ground.body,-bobDiameter*2,0); 

	bob2 = new Bob (groundX + (-bobDiameter),200,50); 
	rope2 = new Rope (bob2.body,ground.body,-bobDiameter,0);

	bob3 = new Bob (groundX,200,50);
	rope3 = new Rope (bob3.body,ground.body,0,0);

	bob4 = new Bob (groundX + bobDiameter,200,50);
	rope4 = new Rope (bob4.body,ground.body,bobDiameter,0);

    bob5 = new Bob (groundX + 2*bobDiameter,200,50);
	rope5 = new Rope (bob5.body,ground.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display ();

   bob1.display ();
   rope1.display ();

  bob2.display ();
  rope2.display ();

  bob3.display ();
  rope3.display ();

  bob4.display ();
  rope4.display ();

  bob5.display ();
   rope5.display ();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW ) 
	{
	  Matter.Body.applyForce(bob5.body, bob5.body.position,  {
																x : -125,
																y : -45
	                                                         });
	}
  }
