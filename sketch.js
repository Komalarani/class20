const Engine=Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;


function setup() {


  createCanvas(800,400);
 engine = Engine.create();
world = engine.world;
var option={
isStatic:true
}
ground = Bodies.rectangle(100,380,800,20,option);
World.add(world,ground);
var op={
  restitution:5.0
}
ball = Bodies.circle(200,350,50,op);
  World.add(world,ball);
}

function draw() {
  Engine.update(engine);
  background(255,255,255);  
rectMode(CENTER);
fill("green");
rect (ground.position.x,ground.position.y,800,20); 
ellipseMode(RADIUS);
fill("yellow");
ellipse(ball.position.x,ball.position.y,40,50);

  
}