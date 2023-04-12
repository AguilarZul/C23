//2 importar los modulos
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//Crear espacio de nombre para Engine
//Crear espacio de nombre para World
//Crear espacio de nombre para Bodies
//Crear espacio de nombre para Body


function setup() {
  createCanvas(400,400);
//crear engine
  //Agregar world a engine
  engine = Engine.create();
  world = engine.world;
//nos ayuda a crear cuerpo circular y aplicar la propiedad restitution
//y friction del aire para hacer que la pelota se mueva sola
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   //5 crea un cuerpo rectangular llamado ground - suelo, y agregalo a world
 ground = Bodies.rectangle(100,400,400,20,ground_options);
 World.add(world,ground);
//crear un fondo
//agregarlo a world
//creasion de nuestra figura sircular y la agregamos a nuestro world
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
 rect(ground.position.x,ground.position.y,500,20);


  
  
}

