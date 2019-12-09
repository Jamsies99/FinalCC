function Heart(x, y){
	this.x = x;
	this.y = y; 
	this.r = 10;
	this.toDelete = false
	this.img = loadImage("Assets/heart.jpg");

	
this.show = function(){
	fill(150,0, 0);
	image(this.img, this.x, this.y);
}


this.hit = function(human){
	let d = dist(this.x, this.y, human.x, human.y);
	if (d < this.r + human.r){
		return true;
	}
	else {
		return false; 
	}
}

this.move = function(){
	this.x = this.x+8;
}

this.gone = function(){
	toDelete = true; 
} 

}