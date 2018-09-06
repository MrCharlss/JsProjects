let bubbles = []

function setup() {
	createCanvas(600, 400);
	for(let i = 0; i < 10; i++){
		let x = random(100, 500);
		let y = random (50, 300)
		let r = random(5,20);
		bubble = new Bubble(x,y,r);
		bubbles.push(bubble)
	}
}

function draw() {
	background(0);
	for(bubble of bubbles){
		bubble.show();
		bubble.move();
		let overlapping = false;
		for(other of bubbles){
			if(bubble !== other && bubble.intersects(other)){
				overlapping = true;
			}
		}
		if(overlapping){
			bubble.changeColor(255);
			//console.log(`Bubble ${bubble[i]} is overlapping`)
		} else {
			bubble.changeColor(0);
		}
	}
}

class Bubble{
	constructor(x, y, r=50){
		this.x = x;
		this.y = y;
		this.r = r;
		this.brightness = 0;
	}
	changeColor(bright){
		this.brightness = bright;
	}

	intersects(other){
		let d = dist(this.x, this.y, other.x,other.y)
		if(d < this.r + other.r)
		return true

	}

	contains(px,py){
		let d = dist(px, py, this.x, this.y);
		if(d < this.r){
			return true;
		}else {
			return false;
		}
	}
	move(){
		this.x = this.x + random(-2,2);
		this.y = this.y + random(-2,2);
	}
	show(){
		stroke(255);
		strokeWeight(4);
		fill(this.brightness, 125);
		//noFill()
		ellipse(this.x, this.y, this.r * 2)
	}

}