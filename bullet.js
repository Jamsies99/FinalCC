function Bullet(x, y){
	this.x = x;
	this.y = y; 
	this.r = 4;

	
this.show = function(){
	fill(random(255),random(255), random(255));
	ellipse(this.x, this.y, this.r*2, this.r*2); 
}

this.hit = function(player){
	let d = dist(this.x, this.y, player.x, player.y);
	if (d < this.r + player.r){
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
	this.x = this.x-3;
}

}