var poin = {
  x: 100,
  y: 50,
};

var col = {
  r: 255,
  g: 0,
  b: 0
  
};

function setup() {
  createCanvas(600,400);
  background(0)
}

function draw() {
  poin.x = random(0,width)
  poin.y = random(0,height)
  if (poin.x > width/2){
    col.r = random(0,100);
    col.g =random(0,255);
    col.b = random(0,175);
  }else{
    col.r =10;
    col.b =50;
    col.g = 10;
  }
  fill(col.r,col.g,col.b);
  ellipse(poin.x,poin.y,5,5)
  
}