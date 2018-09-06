

function setup() {
	posX = random(0,280);
	posY = random(0,200);
	alto = random(10,25);
	largo = random(10,25);	
	createCanvas(577, 400);
	figUno = new Rectangulos(posX,posY,alto,largo);
	figDos = new Rectangulos(280,posY,alto,largo);
}


function draw() {
	background(0);
	figUno.show();
	figUno.move();
	figDos.show();
	


}

class Rectangulos{
	constructor(posX,posY,alto,largo){
		this.x = posX;
		this.y = posY;
		this.alto = alto;
		this.largo = largo;
	};

	show(){
		noFill();
		stroke(255);
		rect(this.x,this.y,this.alto,this.largo)
	}
	move(){
		
		if(this.x > 577 || this.x < 0 || this.y < 0 || this.y > height){
			this.x *= -1;
			this.y *= -1;
			console.log(this.x + " Salio!");
		}
		this.x += 3 /* this.x + random(-5,5); */
		this.y +=3 /* this.y + random(-5,5); */
	}

}