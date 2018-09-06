var ball = {
  x: 200,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

function setup() {
  createCanvas(400,200);
  
}

function draw() {
  background(0);
  forma()
  movimiento()
  rebote()
}

function movimiento(){
  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
  
}

function rebote(){
  if(ball.x > width || ball.x < 0){
    ball.xspeed = ball.xspeed * -1;
  }
  if(ball.y > height || ball.y < 0){
    ball.yspeed = ball.yspeed * -1;
  }
  
}
function forma(){
  stroke(255);
  strokeWeight(4)
  noFill();
  ellipse(ball.x,ball.y,24,24);
}