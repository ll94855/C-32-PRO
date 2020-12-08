const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground;
var slingshot;
var polygon;
var polygon_img;
var block;
var stand;
var score = 0;

function preload() {
   polygon_img = loadImage("sprites/polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,20);
    stand = new Ground(700,300, 300,20);
    
    block1 = new Box(740,270,40,40);
    block2 = new Box(780,270,40,40);
    block3 = new Box(620,270,40,40);
    block4 = new Box(660,270,40,40);
    block5 = new Box(700,270,40,40);
    block6 = new Box(700,230,40,40);
    block7 = new Box(740,230,40,40);
    block8 = new Box(780,230,40,40);
    block9 = new Box(740,190,40,40);
    block10 = new Box(780,190,40,40);
    block11 = new Box(780,150,40,40);

    polygon = Bodies.circle(150,200,20);
    World.add(world,polygon);

    

    slingshot = new slingShot(this.polygon,{x:150,y:200});
}

function draw()
{
    background(128, 128, 128);
    Engine.update(engine);

    ground.display();
    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();

    text("I guarantee you all these boxes will not fall on your first try of moving them, so use space to try again.",150,150);
    text("SCORE: "+score,150,100);
    slingshot.display();

    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged()
{
   
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}

function mouseReleased()
{
    slingshot.fly();
}

function keyPressed()
{
if(keyCode === 32)
{
    slingshot.attach(polygon);
}
}