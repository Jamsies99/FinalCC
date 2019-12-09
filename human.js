function Human(x, y){
	this.x = x;
	this.y = y; 
	this.r = 20;
	this.struck = false; 
	this.ydir = .90;
	this.img = loadImage("Assets/human.jpg");
	
this.show = function(){
	fill(150,0,0);
	image(this.img, this.x, this.y);
}


this.move = function(){
	this.y = this.y + this.ydir;

}

this.hit = function(){
	this.struck = true;
}

this.shiftLeft = function(){
	this.x -= this.r; 
	this.ydir *= -1.05;
}

}