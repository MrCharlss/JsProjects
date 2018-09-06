let nums = [100,25,46,73];

function setup() {
	createCanvas(600, 400);
}

function draw() {
	background(0);
	noFill();
	stroke(255);

	for(var i =0; i < nums.length; i++){
		
		ellipse(i*100+100,200,nums[i],nums[i])
		
		
	}

}

function mousePressed(){
	index = index + 1;
	x += 10;
	if (index == words.length){
		index =0;
	}
}