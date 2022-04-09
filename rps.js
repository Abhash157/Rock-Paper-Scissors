
 /*------------------------start menu------------------------*/

let startMenu= document.getElementsByClassName("start-menu");
let i=0;
window.onload= rapidThrow() 
let rapidAnim= setInterval(rapidThrow,350)

function rapidThrow(){
		let rapidArray=["images/rock.png","images/paper.png","images/scissor.png"]
		if(i>2) {
				i=0;
		}
		document.getElementById("image").src=rapidArray[i]		
		i+=1;
}
function start() {
		startMenu[0].style.display="none"
		clearInterval(rapidAnim)
}		



/*----------------------------vars---------------------------*/

let img1= document.getElementsByClassName("img1");
let img2= document.getElementsByClassName("img2");

let rock= document.getElementById("rock")
let paper= document.getElementById("paper")
let scissor= document.getElementById("scissor")
let rock2= document.getElementById("rock2")
let paper2= document.getElementById("paper2")
let scissor2= document.getElementById("scissor2")

let rockbtn= document.getElementById("rockbtn")
let paperbtn= document.getElementById("paperbtn")
let scissorbtn= document.getElementById("scissorbtn")



/*--------------------------Reset----------------------------*/
function reset() {
		for(i=0;i<img2.length;i++){
				img2[i].style.bottom="-40vh"
		}
		for(i=0;i<img1.length;i++){
				img1[i].style.top="-40vh"
		}
}

/*--------------------- showScoreChange ---------------------*/
let boards= document.getElementById("boards");
let opBoard= document.getElementById("op-board")
let board= document.getElementById("board");
let opScoreChange= document.getElementById("op-score-change")
let scoreChange= document.getElementById("score-change")

function determine() {

/*---------------------------draw---------------------------*/
		if(rock2.style.bottom=="0px" && rock.style.top=="0px") {
				draw()
		}
		if(paper2.style.bottom=="0px" && paper.style.top=="0px") {
				draw();
		}
		if(scissor2.style.bottom=="0px" && scissor.style.top=="0px") {
				draw();
		}
		
/*----------------------------lose--------------------------*/
		if(rock2.style.bottom=="0px" && paper.style.top=="0px") {
				lose()
		}
		if(paper2.style.bottom=="0px" && scissor.style.top=="0px") {
				lose();
		}
		if(scissor2.style.bottom=="0px" && rock.style.top=="0px") {
				lose();
		}
		
/*----------------------------win--------------------------*/
		if(rock2.style.bottom=="0px" && scissor.style.top=="0px") {
				win()
		}
		if(paper2.style.bottom=="0px" && rock.style.top=="0px") {
				win()
		}
		if(scissor2.style.bottom=="0px" && paper.style.top=="0px") {
				win()
		}
}

function draw() {
		scoreChange.src="images/+0.png"
		opScoreChange.src="images/+0.png"
}
function lose() {
		scoreChange.src="images/+0.png"
		opScoreChange.src="images/+1.png"
		opScore+=1
		updateScore()
}
function win() {
		scoreChange.src="images/+1.png"
		opScoreChange.src="images/+0.png"
		score+=1
		updateScore()
}

function showChange() {
	 //if(status==win) {
	 		opScoreChange.src="images/+0.png"
	 		scoreChange.src="images/+1.png"
	 //}
	 boards.style.display="block"
	 setTimeout(function() {
	 		boards.style.display="none"
	 },600)
}


/*------------------------showScore--------------------------*/
let opScoreCont= document.getElementById("op-score-cont")
let scoreCont= document.getElementById("score-cont")

var score=0;
var opScore=0;

function updateScore() {
		opScoreCont.innerHTML="Score: "+opScore
		scoreCont.innerHTML="Score: "+score
}

		opScoreCont.innerHTML="Score: "+opScore
		scoreCont.innerHTML="Score: "+score


/*-------------------------Buttons---------------------------*/
paperbtn.onclick= function() {
		for(i=0;i<img2.length;i++){
				img2[i].style.bottom="-40vh"
		}
		for(i=0;i<img1.length;i++){
				img1[i].style.top="-40vh"
		}
		paper2.style.bottom="0";
		let no= Math.floor(Math.random()*3)
		img1[no].style.top="0"
		setTimeout(reset,1000)
		setTimeout(showChange,700);
		setTimeout(determine,700)
}
rockbtn.onclick= function() {
		for(i=0;i<img2.length;i++){
				img2[i].style.bottom="-40vh"
		}
		for(i=0;i<img1.length;i++){
				img1[i].style.top="-40vh"
		}
		rock2.style.bottom="0";
		let no= Math.floor(Math.random()*3)
		img1[no].style.top="0"
		setTimeout(reset,1000)
		setTimeout(showChange,700);
		setTimeout(determine,700)
}
scissorbtn.onclick= function() {
		for(i=0;i<img2.length;i++){
				img2[i].style.bottom="-40vh"
		}
		for(i=0;i<img1.length;i++){
				img1[i].style.top="-40vh"
		}
		scissor2.style.bottom="0";
		let no= Math.floor(Math.random()*3)
		img1[no].style.top="0"
		setTimeout(showChange,700);
		setTimeout(reset,1000)
		setTimeout(determine,700)
}


/*----------------------------Sower--------------------------*/
/*setInterval(sower,100)
function sower() {
		document.getElementById("sower").innerHTML=paper2.style.bottom+"   "+ paper.style.top
}
*/
