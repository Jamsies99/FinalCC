function Candy(x, y){
	this.x = x;
	this.y = y; 
	this.r = 10;
	this.toDelete = false; 
	this.img = loadImage("Assets/candy.jpg");
	
this.show = function(){
	fill(0,0, 150);
	//ellipse(this.x, this.y, this.r*2, this.r*2); 
	image(this.img, this.x, this.y);
}

this.hit = function(alien){
	let d = dist(this.x, this.y, alien.x, alien.y);
	if (d < this.r + alien.r){
		return true;
	}
	else {
		return false; 
	}
}

this.gone = function(){
	toDelete = true;
}

this.move = function(){
	this.x = this.x-8;
}

}