const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world,object;

var ground;
var stand1,stand2;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12;
var polygon_Obj;
var slingshot;

function preload(){

}

function setup(){
   canvas = createCanvas(1200,500);

   engine = Engine.create();
   world = engine.world;

   ground = new Ground(600,490,1200,20);
   stand1 = new Ground(450,350,400,10);
   stand2 = new Ground(900,218,300,10);


   block1 = new block(300,312,40,50);
   block2 = new block(340,312,40,50);
   block3 = new block(380,312,40,50);
   block4 = new block(420,312,40,50);
   block5 = new block(460,312,40,50);
   block6 = new block(500,312,40,50);
   block7 = new block(540,312,40,50); 

   block8 = new block(340,262,40,50);
   block9 = new block(380,262,40,50);
   block10 = new block(420,262,40,50);
   block11 = new block(460,262,40,50);
   block12= new block(500,262,40,50);

   block13 = new block(380,212,40,50);
   block14 = new block(420,212,40,50);
   block15 = new block(460,212,40,50);

   block16 = new block(420,162,40,50);

   block17 = new block(790,185,40,50);
   block18 = new block(830,185,40,50);
   block19 = new block(870,185,40,50);
   block20 = new block(910,185,40,50);
   block21 = new block(950,185,40,50);

   block22 = new block(830,145,40,50);
   block23 = new block(870,145,40,50);
   block24 = new block(910,145,40,50);

   block25 = new block(870,105,40,50);

   polygon_Obj = new polygon(200,200,60,60);
   
   slingshot = new SlingShot(polygon_Obj,{x:100,y:200});

   

}

function draw(){
    background(0);
    text(mouseX,200,200);
    text(mouseY,240,200);
    Engine.update(engine);

     ground.display();
     stand1.display();
     stand2.display();
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
     block12.display();

     block13.display();
     block14.display();
     block15.display();

     block16.display();

     block17.display();
     block18.display();
     block19.display();
     block20.display();
     block21.display();

     block22.display();
     block23.display();
     block24.display();

     block25.display();

     polygon_Obj.display();

     slingshot.display();
}

