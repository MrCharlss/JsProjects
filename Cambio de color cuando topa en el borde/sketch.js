var speed = 3;
var x=0;
obje = rect();

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
   if ( x > width){
    speed = -3;
    fill(0,255,0);
    
  }else if (x < 0){
    speed =3;
    noFill();
  };
  rect(x,200,100,100);
  x = x+speed;
}