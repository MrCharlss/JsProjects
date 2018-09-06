
var cols =0;
var poX =0; 

function setup() {
	createCanvas(600,400);
}

function draw() {
  cols = map(poX,0,600,0,255);
  background(cols);

  fill(250,118,222);
  ellipse(poX,200,64,64);
  if(poX < 650){
    poX +=1;
  }else{
    poX =0;
  }
  
 
  console.log(poX);
} 