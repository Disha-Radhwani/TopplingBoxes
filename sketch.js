//universe- Matter.Engine
//Planets(Earth)- Matter.World
//Humans- Matter.Bodies 

//giving namespaces
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine, world;
var box1,ground1,box2,box3,box4,box5;
function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world= engine.world;
box1=new Box(200,300,40,50);
ground1=new ground(200,360,400,20);
box2=new Box(220,100,40,70);
box3=new Box(90,200,50,40)
box4=new Box(100,90,60,50)
box5=new Box(110,80,70,60)
}





function draw() {
  background("black");
  Engine.update(engine);
 box1.display();
 ground1.display();
 box2.display();

 box3.display();
 box4.display();
 box5.display();

}
