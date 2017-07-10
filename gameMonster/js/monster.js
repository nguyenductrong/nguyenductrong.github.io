var container = document.getElementById("container");
var header = document.getElementById("header");
var context = container.getContext('2d');
var contextAction = header.getContext('2d');
document.body.appendChild(container);
var score = 10;
var tempScore = 10;
var heart = 5;
var speedOfPlay = 1;
var numberBoom = 3;
var numberStop = 3;
var numberMonster = 1;
var setBackground = false; // setBackground container
var booleanBoom = true;
var booleanStop = false;
var booleanPause = false;
var run = true;
var listBlood = new Array();
var stopGameOver = false;
var numberMonsterDie = 0;
// setBackground container
var backgroundContainer = new Image();
backgroundContainer.onload = function() {
	setBackground = true;
	
}
backgroundContainer.src = ("images/background.png");

// Check browser support
if(typeof(Storage) != "underfined") {
	localStorage.setItem("tempScore", tempScore); // add tempScore in list Storage.
}

var imageMonter = new Image();
imageMonter.onload = function() {
}
imageMonter.src = "images/monster.png";

var imageMonsterBoss = new Image();
imageMonsterBoss.onload = function() {
}
imageMonsterBoss.src = "images/monsterBoss.png";

// create btnBoom
var btnBoom = new Image();
btnBoom.onload = function() {	
}
btnBoom.src = "images/boom.png"

//creat btnStop
var btnStop = new Image();
btnStop.onload = function() {	
}
btnStop.src = "images/stop.png";

// create btnPause
var btnPause = new Image();
btnPause.onload = function() {	
}
btnPause.src = "images/pause.png";

// create play
var btnPlay = new Image();
btnPlay.onload = function() {
}
btnPlay.src = "images/play.png";

// create btnRestart
var btnRestart = new Image();
btnRestart.onload = function() {	
}
btnRestart.src = "images/restart.png";

// create heartImg
var itemHeart = new Image();
itemHeart.onload = function() {	
}
itemHeart.src = "images/heart.png"

// create blood
var blood = new Image();
blood.onload = function() {	
}
blood.src = "images/blood.png";

// New class Monster
function Monster (beginX , beginY, endX, endY, startX, startY, stopX, stopY, speed, click, show, dieX, dieY) {
	this.beginX = beginX;
	this.beginY = beginY;
	this.endX = endX;
	this.endY = endY;
	this.startX = startX;
	this.startY = startY;
	this.stopX = stopX;
	this.stopY = stopY;
	this.speed = speed;
	this.click = click;
	this.show = show;
	this.dieX = dieX;
	this.dieY = dieY;
}

// New object Monster
var monster1 = new Monster(0, 0, 120, 120, 0, 0, 120, 120, speedOfPlay, false, true, 0,0 );

var monster2 = new Monster( 190, 0, 190, 120, 190, 0, 190, 120, speedOfPlay, false, false, 0,0 );

var monster3 = new Monster( 380, 0, 260, 120, 380, 0, 260, 120, speedOfPlay, false, false, 0, 0);

var monster4 = new Monster( 380, 190, 260, 190, 380, 190, 260, 190, speedOfPlay, false, false, 0, 0);

var monster5 = new Monster( 380, 380, 260, 260, 380, 380, 260, 260, speedOfPlay, false, false, 0, 0);

var monster6 = new Monster(190, 380, 190, 260, 190, 380, 190, 260, speedOfPlay, false, false, 0,0);

var monster7 = new Monster(0, 380, 120, 260, 0, 380, 120, 260, speedOfPlay, false, false, 0, 0);

var monster8 = new Monster(0, 190, 120, 190, 0, 190, 120, 190, speedOfPlay, false, false, 0, 0);

var monster9 = new Monster(Math.floor((Math.random() * 500) + 1),
				Math.floor((Math.random() * 500) + 1),
				Math.floor((Math.random() * 500) + 1),
				Math.floor((Math.random() * 500) + 1),
				Math.floor((Math.random() * 500) + 1),
				Math.floor((Math.random() * 500) + 1),
				Math.floor((Math.random() * 500) + 1),
				Math.floor((Math.random() * 500) + 1),
				1, false, false, 0, 0);

// creat event click for buttons
header.addEventListener("click", function(e) {
	var locationX = e.pageX - this.offsetLeft;
	var locationY = e.pageY - this.offsetTop;
	if(stopGameOver) {
		console.log("Stop game!");
	} else {
		// check click boom
		if (locationX > 290 && locationX < 340 && locationY > 60 && locationY < 100) {
			console.log("BOOM");
			if (booleanBoom) {
				clickBoom();
				numberBoom --;
				if (numberBoom <= 0) {
				booleanBoom = false;
				}
			}
		}
		// check click stop
		if (locationX > 350 && locationX < 390 && locationY > 60 && locationY < 100 ) {
			console.log("STOP");			
			if(booleanPause) {
				console.log("Game Pause!");	
			}else {
				numberStop --;
				run = false;
				booleanStop = true;
				if(numberStop <= 0) {
					booleanStop = false;
					run = true;
					main();					
				}			
				setTimeout(function() {
					run = true;
					main();
					booleanStop = false;
				},2000);
			}	 
		}
		//check click pause
		if (locationX > 400 && locationX< 440 && locationY > 60 && locationY < 100) {
			console.log("PAUSE");
			if (run){
				run = false;
				main();
				booleanPause = true;
				contextAction.drawImage(btnPlay, 400, 60, 40, 40);
				btnPause.enabled=true; // hidden image pause
			}else {
				run = true;
				main();
				booleanPause = false;
				container.addEventListener("click", clickContainer );
			}
		}
	}
	
	// check click restart
	if (locationX > 450 && locationX < 490 && locationY > 60 && locationY < 100) {
			console.log("RESTART");
			context.clearRect(0, 0, container.width, container.height);
			restart();
			main();
	}	
});


function clickContainer (e) {
	locationX = e.pageX - this.offsetLeft; // position mouse 
	locationY = e.pageY - this.offsetTop;
	
	if (monster1.show) {
		executeActionMonsterDie(monster1, locationX, locationY);
			
	} 
	if (monster2.show) {
		executeActionMonsterDie(monster2, locationX, locationY);
	}
	if (monster3.show) {
		executeActionMonsterDie(monster3, locationX,locationY);
	}
	if (monster4.show) {
		executeActionMonsterDie(monster4, locationX,locationY);
	}
	if (monster5.show) {
		executeActionMonsterDie(monster5, locationX,locationY);
	}
	if (monster6.show) {
		executeActionMonsterDie(monster6, locationX,locationY);
	}
	if (monster7.show) {
		executeActionMonsterDie(monster7, locationX,locationY);
	}
	if (monster8.show) {
		executeActionMonsterDie(monster8, locationX,locationY);
	}
	if (monster9.show) {
		executeActionMonsterDie(monster9, locationX,locationY);	
	}
}
// even click for Monster in the area container
container.addEventListener("click", clickContainer );

/*
  funciton click on the monster
  @param locationX, locationY : location mouster
*/
var executeActionMonsterDie = function(monster, locationX, locationY) {	
	if (monster.click) {
		if (monster.startX < locationX && locationX < (monster.startX + imageMonter.width) && locationY < (monster.startY + imageMonter.height)) {
		var soundClick = new Audio('audio/click.wav');
		soundClick.play();
		score += 10;
		tempScore += 10;
		monster.click = false;
		monster.show = false;
		monster.dieX = locationX;
		monster.dieY = locationY;
		monster.startX = monster.beginX;
		monster.startY = monster.beginY;
		monster.stopX = monster.endX;
		monster.stopY = monster.endY;
		drawContainer();	
		addPositionMonsterDie(monster.dieX, monster.dieY);
		appearMonsterBoss();
		for (var i = 0; i < numberMonster; i++) {
			randomMonster();
		}
		
		}else {
			score -= 5;
		}
	} 	
}

function appearMonsterBoss() {
	numberMonsterDie = parseInt(listBlood.length);
	console.log("so monster die: " + numberMonsterDie);
	if( numberMonsterDie == 40) {
		heart ++;
		numberBoom ++;
		numberStop ++;
		numberMonsterDie = 0;
		monster9.show = true;
		monster9.speed = 2;	
		numberMonsterDie = 0;
		score += 15;
		tempScore += 15;
	}
}

/*
 function save position monster die
 @param: positionX: location monsterDieX
         positonY: location monsterDieY
*/
var addPositionMonsterDie = function(positionX, positionY) {
	var itemBlood = { 
		positionX: positionX,
		positionY: positionY
	}
	listBlood[listBlood.length] = itemBlood;
	
}

// function create a random monster
var randomMonster = function () {
	var value = Math.floor( (Math.random() * 8) + 1);
	console.log("value random: " + value);
	switch (value) {
		case 1:
		if (!monster1.show) {
			monster1.show = true;
		}
		break;
		case 2:
		if (!monster2.show) {
			monster2.show = true;
		}
		break;
		case 3:
		if (!monster3.show) {
			monster3.show = true;
		}
		break;
		case 4:
		if (!monster4.show) {
			monster4.show = true;
		}
		break;
		case 5:
		if (!monster5.show) {
			monster5.show = true;
		}
		break;
		case 6:
		if (!monster6.show) {
			monster6.show = true;
		}
		break;
		case 7:
		if (!monster7.show) {
			monster7.show = true;
		}
		break;
		case 8:
		if (!monster8.show) {
			monster8.show = true;
		}
		break;	
	}	
}

// function speed by score
var leverPlay = function() {
	var lever = tempScore/100;
	switch(parseInt(lever)) {
		case 1:
		speedOfPlay = 1;
		numberMonster = 1;
		break;
		case 2:
		speedOfPlay = 2;
		numberMonster = 2;
		break;
		case 4:
		speedOfPlay = 4;
		numberMonster = 4;
		break;
		case 6:
		speedOfPlay = 6;
		numberMonster = 6;
		break;
		default:
		if (lever > 6){
			speedOfPlay = 6;
		}
		break;
	}
}

// function click boom
var clickBoom = function() {
	if (monster1.show) {
		score += 10;
		tempScore += 10;
		monster1.show = false;
		monster1.click = false;
		addPositionMonsterDie(monster1.startX, monster1.startY);
	}
	if (monster2.show) {
		score += 10;
		tempScore += 10;
		monster2.show = false;
		monster2.click = false;
		addPositionMonsterDie(monster2.startX, monster2.startY);
	}
	if (monster3.show) {
		score += 10;
		tempScore += 10;
		monster3.show = false;
		monster3.click = false;
		addPositionMonsterDie(monster3.startX, monster3.startY);
	}
	if (monster4.show) {
		score += 10;
		tempScore += 10;
		monster4.show = false;
		monster4.click = false;
		addPositionMonsterDie(monster4.startX, monster4.startY);
	}
	if (monster5.show) {
		score += 10;
		tempScore += 10;
		monster5.show = false;
		monster5.click = false;
		addPositionMonsterDie(monster5.startX, monster5.startY);
	}
	if (monster6.show) {
		score += 10;
		tempScore += 10;
		monster6.show = false;
		monster6.click = false;
		addPositionMonsterDie(monster6.startX, monster6.startY);
	}
	if (monster7.show) {
		score += 10;
		tempScore += 10;
		monster7.show = false;
		monster7.click = false;
		addPositionMonsterDie(monster7.startX, monster7.startY);
	}
	if (monster8.show) {
		score += 10;
		tempScore += 10;
		monster8.show = false;
		monster8.click = false;
		addPositionMonsterDie(monster8.startX, monster8.startY);
	}
	if (monster9.show) {
		score += 10;
		tempScore += 10;
		monster9.show = false;
		monster9.click = false;
		addPositionMonsterDie(monster9.startX, monster9.startY);
	}
	speedOfPlay = speedOfPlay; 
	var soundBoom = new Audio('audio/boom.mp3');
	soundBoom.play();
	drawContainer();
	for (var i = 0; i < numberMonster; i ++){
		randomMonster();
	}
}

/*
 funcition refresh monster
 @param monster

*/
var refreshMonster = function (monster) {
	monster.show = false;
	monster.speed = 1;
	monster.startX = monster.beginX;
	monster.startY = monster.beginY
	monster.stopX = monster.endX;
	monster.stopY = monster.endY;
}

// function click restart
var restart = function() {
	speedOfPlay = 1;
	run = true;
	stopGameOver = false;
	score = 10;
	tempScore = 10;
	heart = 5;
	numberBoom = 3;
	numberStop = 3;
	numberMonster = 1;
	setBackground = true;
	booleanBoom = true;
	booleanStop = false;
	booleanPause = false;
	localStorage.setItem("tempScore",tempScore);
	listBlood = new Array();
	refreshMonster(monster1);
	refreshMonster(monster2);
	refreshMonster(monster3);
	refreshMonster(monster4);
	refreshMonster(monster5);
	refreshMonster(monster6);
	refreshMonster(monster7);
	refreshMonster(monster8);
	refreshMonster(monster9);
	monster1.show = true;   // after refresh monster1 appear first
	container.addEventListener("click", clickContainer );
}
// function update location move monster
var updateMoveMonster = function(monster) {
	monster.click = true;
	
	if (monster.startX > monster.stopX) {
		monster.startX -= monster.speed;
	} else if(monster.startX < monster.stopX) {
		monster.startX += monster.speed;
	}
	
	if(monster.startY > monster.stopY) {
		monster.startY -= monster.speed;
	} else if(monster.startY < monster.stopY) {
		monster.startY += monster.speed;
	}
	
	if(monster.startX == monster.stopX && monster.startY == monster.stopY) {
		monster.startX = monster.stopX;
		monster.startY = monster.stopY;
		monster.stopX = monster.beginX;
		monster.stopY = monster.beginY;

	}
	
	if(monster.startX == monster.beginX && monster.startY == monster.beginY) {
		monster.show = false;
		monster.startX = monster.beginX;
		monster.startY = monster.beginY;
		monster.stopX = monster.endX;
		monster.stopY = monster.endY;
		score -= 10;
		heart --;
		randomMonster();
	}
	
}

// draw blood at monster die blood(positionX, positionY)
var updateBlood = function() {
	if (listBlood.length > 0) {
		for (var i = 0; i < listBlood.length; i ++) {
			context.drawImage(blood,listBlood[i].positionX - 30, listBlood[i].positionY - 30);
		}
	}
}

// create Image btnPause,btnRestart, btnBoom .......... of header;
var createHeader = function() {
	contextAction.clearRect(0,0,header.width,header.height);
	contextAction.fillStyle = "#007f7f";
	contextAction.font = "20px Arial";
	contextAction.fillText("Score: " + score, 10 , 30);
	contextAction.fillText("Heart: ", 10,60);
	contextAction.fillText("Speed: " + speedOfPlay, 10, 90);
	var item = 0;	
	for(var i = 0; i < heart; i ++) {
		contextAction.drawImage(itemHeart,(item + 70),45,20,20);
		item += 20;
	}
	contextAction.drawImage(btnBoom, 290, 60, 50, 40);
	contextAction.drawImage(btnStop, 350, 60, 40, 40);
	contextAction.drawImage(btnPause, 400, 60, 40, 40);
	contextAction.drawImage(btnRestart, 450, 60, 40, 40);
	contextAction.fillStyle = "#FFFFFF";
	contextAction.font = "35px Arial";
	contextAction.fillText(numberBoom,300,75);
	contextAction.fillText(numberStop,360,75);
	contextAction.font = "20px Arial";
}

// function load and draw pictures
var drawContainer = function() {
	
	if (setBackground) { 
		context.drawImage(backgroundContainer,0,0,container.width,container.height);
	}
	
	updateBlood();
	
	if(monster1.show) {
		context.drawImage(imageMonter, monster1.startX, monster1.startY);
		
	}
	if(monster2.show) {
		context.drawImage(imageMonter, monster2.startX, monster2.startY);
		
	}
	if(monster3.show) {
		context.drawImage(imageMonter, monster3.startX, monster3.startY);
		
	}
	if(monster4.show) {
		context.drawImage(imageMonter, monster4.startX, monster4.startY);
		
	}
	if(monster5.show) {
		context.drawImage(imageMonter, monster5.startX, monster5.startY);
		
	}
	if(monster6.show) {
		context.drawImage(imageMonter, monster6.startX, monster6.startY);
		
	}
	if(monster7.show) {
		context.drawImage(imageMonter, monster7.startX, monster7.startY);
		
	}
	if(monster8.show) {
		context.drawImage(imageMonter, monster8.startX, monster8.startY);
		
	}
	if(monster9.show) {
		context.drawImage(imageMonsterBoss, monster9.startX, monster9.startY);
	
	}
	createHeader();
	
	if(booleanPause) {
	    booleanBoom = false;
		context.fillStyle = "#FFFFFF";
		context.font = "50px Arial";
		context.fillText("Pause!!!", 180, 240);
		contextAction.drawImage(btnPlay, 400, 60, 40, 40);
		container.removeEventListener("click", clickContainer);
	}
	if(booleanStop) {
		context.fillStyle = "#FFFFFF";
		context.font = "50px Arial";
		context.fillText("Stop!!!", 180, 240);
	}
}

// function show gameOver
var gameOver = function() {
	var soundGameOver = new Audio("audio/gameOver.mp3");
	soundGameOver.play();
	context.fillStyle = "#FFFFFF";
	context.font = "40px Arial";
	context.fillText("Game Over!!!", 130, 200);
	context.font = "20px Arial";
	context.fillStyle = "#5bfa3f";
	context.fillText("Score = " + score, 130, 240);
	context.fillText("Best score = " + localStorage.getItem("tempScore"), 130, 280);
	run = false;
	booleanBoom = false;
	stopGameOver = true;
	container.removeEventListener("click", clickContainer); // cancel even click monster
}

// funcition run 
var main = function() {
	leverPlay();	
	if(monster1.show) {
		updateMoveMonster(monster1);
	}
	if(monster2.show) {
		updateMoveMonster(monster2);
	}
	if(monster3.show) {
		updateMoveMonster(monster3);
	}
	if(monster4.show) {
		updateMoveMonster(monster4);
	}
	if(monster5.show) {
		updateMoveMonster(monster5);
	}
	if(monster6.show) {
		updateMoveMonster(monster6);
	}
	if(monster7.show) {
		updateMoveMonster(monster7);
	}
	if(monster8.show) {
		updateMoveMonster(monster8);
	}
	if(monster9.show) {
		updateMoveMonster(monster9);
	}
	drawContainer();
	
	if(score <= 0) {
		gameOver();
	} else if(heart == 0) {
		var bestScore = parseInt(localStorage.getItem("tempScore"));
		if(bestScore < score) {
			localStorage.setItem("tempScore", score);			
		}
		gameOver();
	}else {
		if(run) {
			requestAnimationFrame(main);
		}
	}
	
}

var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame
						|| w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
main();	













