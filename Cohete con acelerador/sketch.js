var y =475;
var speed =-3;
var gravity =1;
var cohete = {
  x:250,
  y:475,
  ancho: 20,
  largo: 40
}
function setup() {
  createCanvas(500,500);
}

function draw() {
  
  background(0);
  
  rectMode(CENTER);
  fill(255);
  rect(cohete.x,cohete.y,cohete.ancho,cohete.largo);
  if(mouseX >= 425 && mouseX < 475 && mouseY >= 425 && mouseY <= 475){
    fill(0,255,0);
    cohete.y = cohete.y + speed
  };
  cohete.y = cohete.y + gravity;
  if (cohete.y > height -25){
    gravity = 0;
  }else{
    gravity = 2.5;
  };
  
  
  rect(450,450,50,50);
  
}