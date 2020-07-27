const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;
 
var engine,world;
var particle;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
  var line = createSprite(400, 450, 3000, 10);
  line.shapeColor = "yellow"
  
  for(var k = 0; k <=width; k= k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, 300, 50)
  
   
  if(score === 5){
    text("Game Over",350,350)
    if(particle !=null){
      particle.display();
      if(particle.body.position.y > 760){
        if(particle.body.position.x < 300){
          score = score+500;
          particle=null;
          if(count>=5)gameState="end";
        }
      }
    }
  }

  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
     
     ground.display();
     
     drawSprites();
   }
}

