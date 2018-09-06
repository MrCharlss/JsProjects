function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  
  for(var x = 0; x <= mouseX; x+= 25){
    for (var y = 0; y <= mouseY; y += 25){
      fill(random(255),0,random(255));
      ellipse(x,y,10,10)
    }
  }
  

  
}