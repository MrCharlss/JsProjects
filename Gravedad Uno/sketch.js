var speed = -4;
var y=560;
var gravity = 0.5;

function setup() {
  createCanvas(200,600);
  
}

function draw() {
  background(0);
  
  fill(255);
  rect(width/2,y,10,20);
  
  if(y < 1/height){
    speed =0;
  }
  y = y + speed + gravity;
  
}