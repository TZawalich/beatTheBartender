/*-----------Bartender-----*/

var barRollOne = document.getElementById('barRollOne');
var barRollTwo = document.getElementById('barRollTwo');
var barRollTotal = document.getElementById('barRollTotal');
var playerOneOneBeat = document.getElementById('playerOneOneBeat');
var playerOneTwoBeat = document.getElementById('playerOneTwoBeat');
var playerOneTotalBeat = document.getElementById('playerOneTotalBeat');
var playerTwoOneBeat = document.getElementById('playerTwoOneBeat');
var playerTwoTwoBeat = document.getElementById('playerTwoTwoBeat');
var playerTwoTotalBeat = document.getElementById('playerTwoTotalBeat');
var playerThreeOneBeat = document.getElementById('playerThreeOneBeat');
var playerThreeTwoBeat = document.getElementById('playerThreeTwoBeat');
var playerThreeTotalBeat = document.getElementById('playerThreeTotalBeat');
var playerFourOneBeat = document.getElementById('playerFourOneBeat');
var playerFourTwoBeat = document.getElementById('playerFourTwoBeat');
var playerFourTotalBeat = document.getElementById('playerFourTotalBeat');

var playerOneWinLose = document.getElementById('playerOneWinLose');
var playerTwoWinLose = document.getElementById('playerTwoWinLose');
var playerThreeWinLose = document.getElementById('playerThreeWinLose');
var playerFourWinLose = document.getElementById('playerFourWinLose');

var playerOneGold = document.getElementById('playerOneGold');
var playerTwoGold = document.getElementById('playerTwoGold');
var playerThreeGold = document.getElementById('playerThreeGold');
var playerFourGold = document.getElementById('playerFourGold');

var playerOneWinnings = document.getElementById('playerOneWinnings');
var playerTwoWinnings = document.getElementById('playerTwoWinnings');
var playerThreeWinnings = document.getElementById('playerThreeWinnings');
var playerFourWinnings = document.getElementById('playerFourWinnings');


function Player(name, roll1, roll2, gold){
	var rollOne =''; var rollTwo = '';
	this.name = name;
	this.roll1 = function(){rollOne = Math.floor(Math.random() * roll1) + 1; return rollOne;};
	this.roll2 = function(){rollTwo = Math.floor(Math.random() * roll2) + 1; return rollTwo;};
	this.totalRoll = function(){ 
		return rollOne + rollTwo;
		};
	this.gold = gold;
}

var playerOneB = new Player("Player One", 6, 6, 300);
var playerTwoB = new Player("Player Two", 6, 6, 300);
var playerThreeB = new Player("Player Three", 6, 6, 300);
var playerFourB = new Player("Player Four", 6, 6, 300);
var Bartender = new Player("Bartender", 6, 6, 9999999999);


rollDiceBeatTrigger.addEventListener("click", beatTheBartender);

function beatTheBartender(){
	var playerOneBet = document.getElementById('playerOneBetBeat').value;
	var playerTwoBet = document.getElementById('playerTwoBetBeat').value;
	var playerThreeBet = document.getElementById('playerThreeBetBeat').value;
	var playerFourBet = document.getElementById('playerFourBetBeat').value;
	
	barRollOne.innerHTML = Bartender.roll1();
	barRollTwo.innerHTML = Bartender.roll2();
	barRollTotal.innerHTML = Bartender.totalRoll();
	playerOneOneBeat.innerHTML = playerOneB.roll1();
	playerOneTwoBeat.innerHTML = playerOneB.roll2();
	playerOneTotalBeat.innerHTML = playerOneB.totalRoll();
	playerTwoOneBeat.innerHTML = playerTwoB.roll1();
	playerTwoTwoBeat.innerHTML = playerTwoB.roll2();
	playerTwoTotalBeat.innerHTML = playerTwoB.totalRoll();
	playerThreeOneBeat.innerHTML = playerThreeB.roll1();
	playerThreeTwoBeat.innerHTML = playerThreeB.roll2();
	playerThreeTotalBeat.innerHTML = playerThreeB.totalRoll();
	playerFourOneBeat.innerHTML = playerFourB.roll1();
	playerFourTwoBeat.innerHTML = playerFourB.roll2();
	playerFourTotalBeat.innerHTML = playerFourB.totalRoll();
	
	
	function settlePlayerBeat(playerTotal, playerWinLose, playerBet, playerName, playerWinnings){
			if(Number(playerTotal.innerHTML) > Number(barRollTotal.innerHTML)){
			playerWinLose.innerHTML = "Player One Wins " + playerBet + " Gold!";
			playerName.gold = Number(playerName.gold) + Number(playerBet);
			playerWinnings.innerHTML = Number(playerWinnings.innerHTML) + Number(playerBet);
		} else{
			playerWinLose.innerHTML = "Player One Loses " + playerBet + " Gold!";
			playerName.gold = Number(playerName.gold) - Number(playerBet);
			playerWinnings.innerHTML = Number(playerWinnings.innerHTML) - Number(playerBet);
		}
	}
	
	settlePlayerBeat(playerOneTotalBeat, playerOneWinLose, playerOneBet, playerOneB, playerOneWinnings);
	settlePlayerBeat(playerTwoTotalBeat, playerTwoWinLose, playerTwoBet, playerTwoB, playerTwoWinnings);
	settlePlayerBeat(playerThreeTotalBeat, playerThreeWinLose, playerThreeBet, playerThreeB, playerThreeWinnings);
	settlePlayerBeat(playerFourTotalBeat, playerFourWinLose, playerFourBet, playerFourB, playerFourWinnings);
	
	playerOneGold.innerHTML = playerOneB.gold;
	playerTwoGold.innerHTML = playerTwoB.gold;
	playerThreeGold.innerHTML = playerThreeB.gold;
	playerFourGold.innerHTML = playerFourB.gold;

}