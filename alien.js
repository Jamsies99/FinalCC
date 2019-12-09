function Alien(x, y){
	this.x = x;
	this.y = y; 
	this.r = 12.5;
	this.struck = false; 
	this.ydir = .90;
	this.img = loadImage("Assets/alien.jpg");
	
this.show = function(){
	fill(0,150,0);
	//ellipse(this.x, this.y, this.r*2,this.r*2); 
	image(this.img, this.x, this.y);
}

this.move = function(){ 
	this.y = this.y + this.ydir;

}
this.hit = function(){
	this.struck = true; 
}

this.shiftRight = function(){
	this.ydir *= -1.05;
	this.x += this.r;
}

}