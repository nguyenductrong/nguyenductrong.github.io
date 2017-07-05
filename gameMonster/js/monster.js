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
var backgroundContainer = new Image();
var listBoold = new Array();

// setBackground container
backgroundContainer.onload = function() {
	setBackground = true;
	
};
backgroundContainer.src = ("images/background.png");


var imageMonter = new Image();
imageMonter.onload = function() {
		
};
imageMonter.src = "images/monster.png";

// create btnBoom

var btnBoom = new Image();
btnBoom.onload = function() {
	
};
btnBoom.src = "images/boom.png"

//creat btnStop
var btnStop = new Image();
btnStop.onload = function() {
	
};
btnStop.src = "images/stop.png";

// create btnPause
var btnPause = new Image();
btnPause.onload = function() {
	
};
btnPause.src = "images/pause.png";

// create btnRestart
var btnRestart = new Image();
btnRestart.onload = function() {
	
};
btnRestart.src = "images/restart.png";

// create heartImg
var itemHeart = new Image();
itemHeart.onload = function() {
	
};

itemHeart.src = "images/heart.png"

// create blood
var blood = new Image();

blood.onload = function() {
	
};
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


var monster7 = new Monster(0, 380, 120, 260, 0, 380, 120, 260, speed, false, false, 0, 0);

var monster8 = new Monster(0, 190, 120, 190, 0, 190, 120, 190, speed, false, false, 0, 0);

var Monster9 = {
	startX: Math.floor((Math.random() * 500) + 1),
	startY: Math.floor((Math.random() * 500) + 1),
	stopX: Math.floor((Math.random() * 500) + 1),
	stopY: Math.floor((Math.random() * 500) + 1),
	speed: 1,
	click: false,
	show: true,
	dieX: 0,
	dieY:0
}

var updateBlood = function(){
	
};

// create Image btnPause,btnRestart, btnBoom .......... of header;
var createHeader = function(){
	contextAction.clearRect(0,0,header.width,header.height);
	contextAction.fillStyle("#007f7f");
	contextAction.font = "20px Arial";
	contextAction.fillText("Score: " + score, 10 , 30);
	contextAction.fillText("Random Monster: " + numberMonster,300, 30);
	contextAction.fillText("Heart: ", 10,60);
	contextAction.fillText("Speed: " + speed, 10, 90);
	var item = 0;	
	for(var i = 0; i < heart; i ++){
		contextAction.drawImage(heartImg,(item + 70),45,20,20);
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
};

// function load and draw pictures
var drawContainer = function(){
	if (setBackground) { 
		context.drawImage(backgroundContainer,0,0,container.width,container.height);
	}
	
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
		context.drawImage(imageMonter, monster9.startX, monster9.startY);
	}
	createHeader();
	
	if(booleanPause) {
		context.fillStyle = "#FFFFFF";
		context.font = "50px Arial";
		context.fillText("Pause!!!", 180, 240);
	}
	if(booleanStop) {
		context.fillStyle = "#FFFFFF";
		context.font = "50px Arial";
		context.fillText("Pause!!!", 180, 240);
	}
};

// creat event click for buttons
header.addEventListener("click", function(e) {
	var locationX = e.pageX - this.offsetLeft;
	var locationY = e.pageX - this.offTop;
	
	//button pause
	if (locationX > 400 && locationX< 440 && locationY > 60 && locationY < 100) {
		console.log("PAUSE");
		if (run){
			run = false;
			booleanPause = true;
		}else {
			run = true;
			
			booleanPause = false;
		}
		
		
	}
	
	// button boom
	if (locationX > 290 && locationX < 340 && locationY > 60 && locationY < 100) {
		if (booleanBoom) {
			console.log("BOOM");
			numberBoom --;
			if (numberBoom <= 0) {
				booleanBoom = false;
			}
		}
	}
	
	// button stop
	
	if (locationX > 350 && locationX < 390 && locationY > 60 && locationY < 100 ) {
		console.log("STOP");
		booleanPause = false;
		if (numberStop > 0) {
			if (run) {
				run = false ;
				booleanStop = true;
				numberStop --;
				
			} else {
				run = true;
				booleanStop = false;
			}
		} else {
			run = true;
			booleanStop = false;
		}
	}
	
	// button restart 
	if (locationX > 450 && locationX < 490 && locationY > 60 && locationY < 100) {
		console.log("RESTART");
		restart() ;
	}
});

// even click for Monster in the area container
container.addEventListener("click", function (e){
	if (booleanPause) {
		score -= 5;
		tempScore -= 5;		
	}
	if(booleanStop){
		
	}
	
	
},false);

var restart = function() {
	speed = 1;
	run = true;
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
	run = true;
	
}

var executeActionMonsterDie = function(monster, locationX, locationY) {
	var countClick = 0;
	if (monster.click) {
		if (monster.startX < locationX && locationX < (monster.startX + monsterImage.width) && monster.startY < locationY && locationY < (monster.startY + monsterImage.height)) {
		var soundClick = new Audio('music/audio.mp3');
		soundClick.play();
		score += 10;
		tempScore += 10;
		countClick ++;
		monster.click = false;
		monster.show = false;
		monster.dieX = monster.startX;
		monster.diey = monster.startY;
		monster.startX = monster.beginX;
		monster.startY = monster.beginY;
		monster.stopX = monster.endX;
		monster.stopY = monster.endY;
		addPositionMonsterDie (monster.dieX, monster.dieY);
		
		if(countClick == 30){
		  heart ++;
		  countClick = 0;
		}
		if(countClick % 5 == 0){
			Monster9.show = true;
			console.log("show monster9");
		}
		random();
		
		}
	} else {
		score -= 5;
		tempScore -= 5;	
	}
	
	
}

var executeActionMonster = function (monster, locationX, locationY) {
	
}

var randomMonster = function () {
	var value = Math.floor( Math.random() * 8);
	switch (value) {
		case 1:
		if (!Monster1.show){
			Monster1.show = true;
		}
		break;
		case 2:
		if (!Monster2.show){
			Monster2.show = true;
		}
		break;
		case 3:
		if (!Monster3.show){
			Monster3.show = true;
		}
		break;
		case 4:
		if (!Monster4.show){
			Monster4.show = true;
		}
		break;
		case 5:
		if (!Monster5.show){
			Monster5.show = true;
		}
		break;
		case 6:
		if (!Monster6.show){
			Monster6.show = true;
		}
		break;
		case 7:
		if (!Monster7.show){
			Monster7.show = true;
		}
		break;
		case 8:
		if (!Monster8.show){
			Monster8.show = true;
		}
		break;
		
	}
	
	
}

var addPositonMonsterDie = function (positonX, positionY){
var imteBoold = { 
	positionX : positionX,
	positionY : positionY
	};
	listBoold.unshift(itemBlood);	
};










