let bubbles =[];
let colorR;
let colorG;
let colorB;

function setup() {
	createCanvas(600, 400);
	
	for(let i = 0; i < 3; i++){
		let x = random(width);
		let y = random(height);
		let r = random(10,50);
		let b = new Bubble(x,y,r);
		bubbles.push(b);
		console.log(bubbles.length)
	}
	
	
}
//puedo intentar cambiar a mouseDrag
/* function mousePressed(){
	let r = random(5,30);
	colorR = random(0,255);
	colorG = random(0,255);
	colorB = random(0,255);
	let b = new Bubble(mouseX,mouseY,r,colorR,colorG,colorB);
	bubbles.push(b);
	console.log(bubbles.length);
	
}
 */

function draw() {
	background(0);
	for(let i =0; i < bubbles.length; i++){
		bubbles[i].show();
		bubbles[i].move();
	}
	
}

function mousePressed(){
	for(let i = 0; i< bubbles.lenght;i++){
		bubbles[i].clicked(mouseX,mouseY);
	};
	console.log(this.mouseX,this.mouseY);

}


class Bubble{
	constructor(x,y,r){
		this.x = x;
		this.y = y;
		this.r = r;
		/* this.colorR = colorR;
		this.colorG = colorG;
		this.colorB = colorB */
	}
	move(){
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
		if(this.x > width || this.x < 0){
			this.x *= -1
		};
		if(this.y > height || this.y < 0){
			this.y *= -1
		};
	}
	show(){
		stroke(255);
		strokeWeight(3);
		noFill()
		ellipse(this.x,this.y,this.r *2);
	}

	clicked(mX,mY){
		let d = dist(mX,mY,this.x,this.y)
		if(d < this.r){
			console.log("esta dentro", d);
			fill(255);
		};
	}

}
/* for(let i = 0; i < 10; i++){
	let x = 10 + 30 * i;
	let wide = random(5,20);
	let alto = wide
	bubbles[i] = new Bubble(x, 200,wide,alto)
} */