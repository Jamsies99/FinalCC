let player;// player object
let alien; // alien object
let human; // human object
let score = 0; // score counter
let humanArmy =[]; // array for human foes
let alienArmy =[]; // array for alien foes
let hearts = []; //array for heart 
let candys = [];
let bullets =[]; //array for fences
let portName = 'COM3'; 
let knob;
let buttonState;// for button
let buttonStateTwo; // for button2
let pos;
let projectiles = 0; 
let inData;
let currTime = 0;
let music;
let lose =false;

 // array for the candies 
function preload(){
	let img = loadImage("Assets/alien.jpg");
	let img2 = loadImage ("Assets/candy.jpg");
	let img3 = loadImage("Assets/human.jpg");
	let img4 = loadImage ("Assets/heart.jpg");
	music = loadSound("Assets/muzik.mp3");
	//let img5 = loadImage("Assets/fence.jpg");
}
 let serial; // variable to hold an instance of the serialport library

function setup(){
  createCanvas(windowWidth, windowHeight); 
  player = new Player(); // init obj for player
  loadUpFoes(humanArmy, alienArmy);
  music.setVolume(.2);
  music.loop();
  var serialport = require("serialport");
  var SerialPort = serialport.SerialPort;

  var serialPort = new SerialPort("COM3") {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n")
});

serialPort.on("open", function () {
  serialPort.on('data', function(data) {
    console.log(data);
  });
});

 /* serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing
  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
  */

}

/*	for (let i = 0; i<6; i++){
  		let fence= new Fence(random(100,500), random(100,500));
  		fences[i] = fence;
	}
}*/
function loadUpFoes(humanArmy, alienArmy){
	for (let i = 0; i<36; i++){ 
		
		if (i< 12){
			alienArmy[i] = new Alien(50,i*50+50);
		}
		else if (i < 24){

			alienArmy[i] = new Alien(100,(i-12)*50+50);
		}
		else {
			alienArmy[i] = new Alien(150,(i-24)*50+50);
		}
	}
	for (let i = 0; i<36; i++){
		if (i< 12){
			humanArmy[i]= new Human(windowWidth-50, i*50+50); 
		}
		else if (i < 24){

			humanArmy[i]= new Human(windowWidth-100, (i-12)*50+50); 
		}
		else {
			humanArmy[i]= new Human(windowWidth-150, (i-24)*50+50); 
		}
	}

}

function draw(){
	background (0); 
	player.show();
	fill(255);


	//FOR PLAYER INPUT
	pos = float(map(int(data), 0, 255, 0, windowHeight));
	player.move(pos);

	// SCOREBOARD
	text("Score:",10,30);
	text(score,50,30);

	//TIME FOR RELOAD& bullets
	let time = millis();
	if ((time-currTime) >=5000){
		currTime = time;
		projectiles = 0;
	}
	/*console.log(bullets.length);
		for(let i = 0; i< 1; i++){
			bullets[i] = new Bullet(random(600,700), random(800));
		}	
		
	//for(let i =0; fences.length; i++){
	//	fences[i].show();
	//}
	for (let i = 0; i< bullets.length; i++){
		bullets[i].show();
		bullets[i].move();
		if (bullets[i].hit(player)){
			gameOver();
		}
	}
	*/




	for (let i = 0; i< hearts.length; i++){
		if (!hearts[i].toDelete){
		hearts[i].show();
		hearts[i].move();
	}
	if (hearts[i].x>=400){
			if(hearts[i].toDelete){
				hearts[i].gone();
				projectiles--;
			}
		}
	for (let j = 0 ; j < humanArmy.length; j++){
			if (hearts[i].hit(humanArmy[j])){
				hearts[i].gone();
				humanArmy[j].hit();
				projectiles--;
				score+=50;
			}
			if (humanArmy[j].x <= player.x + 25){
				gameOver();
			} 
		}
	}

	
	for (let i = 0; i< candys.length; i++){

		if(!candys[i].toDelete){
		candys[i].show();
		candys[i].move();
	}
		if (candys[i].x <= 0){
			if(candys[i].toDelete){
				candys[i].gone();
				projectiles--;
								
			}
		}
		for (let j =0; j < alienArmy.length; j++){
			if (candys[i].hit(alienArmy[j])){
				candys[i].gone();
				alienArmy[j].hit();
				projectiles--;
				score+=50; 
			}
			if (alienArmy[j].x >= player.x-25){
				gameOver();
			}
			
		}
	}
	let upAlien = false; 
	let upHuman = false; 

	for(let i = 0; i <alienArmy.length; i++){
		alienArmy[i].show();
		alienArmy[i].move();
		if (alienArmy[i].y > height|| alienArmy[i].y <= 0){
			upAlien = true;
		}
	}

	for (let i = 0; i<humanArmy.length; i++){
		humanArmy[i].show();
		humanArmy[i].move();
		if(humanArmy[i].y > height|| humanArmy[i].y <= 0){
			upHuman = true; 
		}
	}

	if (upAlien){
		for(let i = 0; i < alienArmy.length; i++){
			alienArmy[i].shiftRight();
		}
	}

	if(upHuman){
		for(let i = 0; i< humanArmy.length; i++){
			humanArmy[i].shiftLeft();
		}
	}
		for(let i = 0; i <alienArmy.length; i++){
		if (alienArmy[i].struck){
			alienArmy.splice(i,1); 
		}
	}
	for (let i = 0; i<hearts.length; i++){
		if (hearts[i].toDelete){
			hearts.splice(i,1);
			//projectile--;
		}
	}
	
	for (let i = 0; i<humanArmy.length; i++){
		if (humanArmy[i].struck){
			humanArmy.splice(i,1);
		}
	}
	for (let i = 0; i<candys.length; i++){
		if (candys[i].toDelete){
			candys.splice(i,1);
			//projectiles--;
		}
	}
	if (lose){
		gameOver();
	}

}

function gameOver(){
	stroke(0);
	rect(windowWidth/2, windowHeight/2, windowWidth/3, windowHeight/3);
	textSize(64);
	text("GAME OVER",windowWidth/2, windowHeight/2);
	text("Score", windowWidth/2, (windowHeight/2)+76);
	text(score, (windowWidth/2)+180, (windowHeight/2)+76);
	lose = true;
}

function keyPressed(){

	 if (keyCode ===RIGHT_ARROW &&projectiles<2){
		let heart = new Heart(player.x+12.5, player.y-15);
		hearts.push(heart);
		projectiles++; 

	}
	else if(keyCode === LEFT_ARROW&&projectiles<2){
		let candy = new Candy(player.x-12.5, player.y-15);
		candys.push(candy);
		projectiles++;
	}
}
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
}
}

//
function serverConnected() {
  print('connected to server.');
}

function portOpen() {
  print('the serial port opened.')
}

function serialEvent() {
  data = String(serial.read());
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function portClose() {
  print('The serial port closed.');
}
