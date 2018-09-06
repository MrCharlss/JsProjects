let x = 40;
let y = 60;
let diam = 10;
let alt = 10;
let xspeed = 1;
let speed = 10 

function setup() {
	createCanvas(600, 400);
	fig = new Bolas(x, y, diam);
}

function draw() {
	background(0);
	fig.forma();
	fig.move();
	

}

class Bolas{
	constructor(x, y, diam, xspeed){
		this.x = x;
		this.y =y;
		this.diam = diam;
		this.xspeed = xspeed;
	}
	forma(){
		fill(255);
		ellipse(this.x, this.y, this.diam);
	}
	move(){
		
		this.x += speed;
		if(this.x > width || this.x < 0)  {
			speed *= -1;
			console.log(this.x);
		}
		
		
		
	}

}
