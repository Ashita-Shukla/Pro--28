
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var tree, treeimg;
var ground;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8;
var boy, boyImg;
var stone;
var chain;
var launchingForce = 100;
function preload(){
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
	//boy sprite..
	boy = createSprite(100, 600, 50, 50);
	boy.addImage("image", boyImg);
	boy.scale = 0.15;
	//Create the Bodies Here.
	//tree objects...
	tree = new Tree(750, 429, 450, 550);
	//ground object...
	ground = new Ground(500, 690, 1000, 20);
	//mango objects...
	mango1 = new Mango(570, 360, 40);
	mango2 = new Mango(690, 380, 60);
	mango3 = new Mango(820, 400, 80);
	mango4 = new Mango(740, 340, 40);
	mango5 = new Mango(850, 300, 50);
	mango6 = new Mango(690, 300, 45);
	mango7 = new Mango(875, 270, 40);
	mango8 = new Mango(740, 230, 40);
	//stone object...
	stone = new Stone(0, 500, 50);
	//connection
	chain = new Chain(stone.body, {x:235, y:420})
	Engine.run(engine);
}


function draw() {
  background("lightblue");
  textSize(25);
  text("press Space to throw again", 50, 50);

  //tree display...
  tree.display();
  //ground display...
  ground.display();
  //mangoes objects...
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  //stone display....
  stone.display();
  chain.display();
  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);
  detectollision(stone, mango7);
  detectollision(stone, mango8);
  drawSprites();
 }


function mouseDrag() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseRelease() {
	chain.fly();
}

function keyPressed() {
if(keyCode === space){
	Matter.Body.setPosition(stone.body, {x:50, y:600});
	chain.attach(stone.body);
}
}

function detectollision(stoneObj, mangoObj){
	mangoBodyPosition = mangoObj.body.position;
	stoneBodyPosition = stoneObj.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance<=mangoObj.r+stoneObj.r){
		Matter.Body.setStatic(mangoObj.body, false);
	}
}
