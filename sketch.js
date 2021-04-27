const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,wood,plane,block
var log,log1,log2
var box1,box2,rubber


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    wood = new Wood(50,50)
    block = new Block(300,300)
    log = new Log(400,400)
    log1 = new Log(700,500)
    log2=new Log(600,300)
    //box1 = new Box(500,400)
    //box2 =new Box2(550,500)
    rubber = new Rubber(570,400,60,60)
   
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    wood.display();
    block.display();
    log.display();
    log1.display();
    log2.display();
   // box1.display();
    //box2.display();
    rubber.display();
    
 
}