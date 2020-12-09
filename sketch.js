var ground1,world,polygon1,connector;



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;

function preload(){

}

function setup() {
	createCanvas(1700, 700);

	engine = Engine.create();
	world = engine.world;

	
  //Create the Bodies Here.
  ground0=new Ground(800,690,1700,30)
	ground1= new Ground(800,500,300,10)
  ground2= new Ground(1200,300,300,10)

	block2=new GreenBlock(1170,280,30,30)
  block4=new GreenBlock(1110,280,30,30)
  block5=new GreenBlock(1230,280,30,30)
   block7=new GreenBlock(1290,280,30,30)
  block8=new GreenBlock(1140,250,30,30)
   block10=new LightGBlock(1200,250,30,30)
   block12=new GreenBlock(1260,250,30,30)
  block13=new BlueBlock(1170,220,30,30)
   block15=new BlueBlock(1230,220,30,30)
  block16=new GreenBlock(1170,190,30,30)
  block17=new BlueBlock(1200,190,30,30)
  block18=new GreenBlock(1230,190,30,30)
  block19=new GreenBlock(1140,190,30,30)
  block20=new GreenBlock(1260,190,30,30)
  block21=new GreenBlock(1170,160,30,30)
   block23=new GreenBlock(1230,160,30,30)

  block24=new GreenBlock(1200,130,30,30)
  
  block1=new LightGBlock(1200,280,30,30)
  block3=new GreenBlock(1140,280,30,30)
 block6=new GreenBlock(1260,280,30,30)
 block9=new GreenBlock(1170,250,30,30)
 block11=new GreenBlock(1230,250,30,30)
 block14=new LightGBlock(1200,220,30,30)
 block22=new BlueBlock(1200,160,30,30)

 block01=new VioletBlock(800,480,30,30)
 block02=new PinkBlock(830,480,30,30)
 block03=new VioletBlock(860,480,30,30)
 block04=new PinkBlock(890,480,30,30)
 block05=new YellowBlock(920,480,30,30)
 block06=new PinkBlock(770,480,30,30)
 block07=new VioletBlock(740,480,30,30)
 block08=new PinkBlock(710,480,30,30)
 block09=new YellowBlock(680,480,30,30)

 block010=new YellowBlock(710,450,30,30)
 block012=new VioletBlock(770,450,30,30)
  block014=new VioletBlock(830,450,30,30)
  block016=new YellowBlock(890,450,30,30)
 block017=new YellowBlock(740,420,30,30)
 block018=new PinkBlock(770,420,30,30)
  block019=new VioletBlock(800,420,30,30)
 block021=new YellowBlock(860,420,30,30)
 block022=new YellowBlock(770,390,30,30)
 block023=new PinkBlock(800,390,30,30)
 block024=new YellowBlock(830,390,30,30)
 block025=new YellowBlock(800,360,30,30)

 block026=new VioletBlock(800,330,30,30)

block011=new PinkBlock(740,450,30,30)
block013=new PinkBlock(800,450,30,30)
block015=new PinkBlock(860,450,30,30)
block020=new PinkBlock(830,420,30,30)
 
	polygon1=new Polygon(240,565,10,10)
	connector=new Connection(polygon1.body,{x:230,y:350})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(153, 0, 0);
  textSize(30)
  text("Score  " + score, 50, 40)


  ground1.display();
ground2.display();
 ground0.display();

block1.display();
block2.display()
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
   
block01.display();
block02.display();
block03.display();
block04.display();
block05.display();
block06.display();
block07.display();
block08.display();
block09.display();
block010.display();
block011.display();
block012.display();
block013.display();
block014.display();
block015.display();
block016.display();
block017.display();
block018.display();
block019.display();
block020.display();
block021.display();
block022.display();
block023.display();
block024.display();
block025.display();
block026.display();

connector.display();
polygon1.display();

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
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();
block17.score();
block18.score();
block19.score();
block20.score();
block21.score();
block22.score();
block23.score();
block24.score();
block01.score();
block02.score();
block03.score();
block04.score();
block05.score();
block06.score();
block07.score();
block08.score();
block09.score();
block010.score();
block011.score();
block012.score();
block013.score();
block014.score();
block015.score();
block016.score();
block017.score();
block018.score();
block019.score();
block020.score();
block021.score();
block022.score();
block023.score();
block024.score();
block025.score();
block026.score();
}

function mouseDragged(){
 
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){
  connector.fly();

}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.setPosition(polygon1.body,{x:230,y:300})
		connector.attach(polygon1.body);
	}
}
