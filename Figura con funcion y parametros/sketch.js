function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  ventanas(375,100,200,100);

}

function ventanas(x,y,anch,larg){
  var disX1 = anch /2;
  var disY1 = larg;
  var disX2 = disX1 / 2;
  noFill();
  stroke(255)
  rectMode(CENTER)
  rect(x,y,anch,larg);
  //fill(255,0,0);
  rect(x-disX1,y,anch,larg);
  //fill(0,255,0);
  rect(x-disX1,y+disY1,anch,larg);
  //fill(0,0,255);
  rect(x+disX2,y+disY1,disX1,larg);
  
}
