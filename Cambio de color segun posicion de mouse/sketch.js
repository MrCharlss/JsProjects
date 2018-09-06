function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  
  if (mouseX < 200){
    ellipse(300,200,100,100);
  }else if (mouseX > 200 && mouseX < 400){
    
    rect(300,200,100,100);
  }else if ( mouseX > 400){
    
    triangle(300,200,100,100);
  }
  
  
}