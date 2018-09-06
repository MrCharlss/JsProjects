let r = 0;
let cicle={
	x: 30,
	y: 200,
	diameter: 50,
}
function set(){
	createCanvas(600,400); 

}

function draw() {
	
	background(0,255,0);

	fill(0,r,0);
	ellipse(cicle.x,cicle.y,cicle.diameter);
	r += 0.1;
	console.log(r);
}