<!DOCTYPE HTML>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<Title>Tavern Games: Beat the Bartender</Title>
			<meta name="description" content="Beat the Bartender Tavern Game">
			<link rel="stylesheet" href="css/beatTheBartenderStyle.css">
		</head>
		<body>
			<h1>Beat the Bartender</h1>
			<div id="beatTheBartender">
				<div class="gameInstructions">
					<h4>The goal of this game is to roll your dice and get a higher total than
						the bartender.</h3>
					<ol>
						<li>Each player chooses their player number.</li>
						<li>Each player sets their gold bet.</li>
						<li>Click the Roll Dice button to roll all the dice at once.</li>
						<li>The game will display each of your two d6 rolls, plus your total.</li>
						<li>Bartender wins ties</li>
						<li>If you've beaten the bartender, you win your bet, if not you lose it.</li>
						<li>Winnings and gold total are both tracked by player name.</li>
						<li>Refresh page to reset game.</li>
					</ol>
				</div>
				<div id="beatTheBartenderGamespace">
					<div id="bartender">
						<h3>Bartender</h3>
						<div id="bartenderRolls">
							Die One: <div id="barRollOne"></div>
							Die Two: <div id="barRollTwo"></div>
							Total: <div id="barRollTotal"></div>
						</div>
					</div>
					<div id="rollDiceBeat"><p id="rollDiceBeatTrigger">Roll the Dice!</p></div>
					<div id="playerOneBeat">
						<div id="playerOneRollsBeat">
							<h2 class="bartendPlayerName">Player One</h2>
							<p id="playerOneWinLose"></p>
							Die One: <div id="playerOneOneBeat"></div>
							Die Two: <div id="playerOneTwoBeat"></div>
							<div class="playerTotal">Total: <div id="playerOneTotalBeat"></div></div>
							<p>Bet: <input type="text" id="playerOneBetBeat" name="playerOneBet" value="0"></p>
							<div class="winnings">Winnings: <div id="playerOneWinnings">0</div></div>
							<div class="gold">Gold: <div id="playerOneGold">300</div></div>
						</div>
					</div>
					<div id="playerTwoBeat">
						<div id="playerTwoRollsBeat">
							<h2 class="bartendPlayerName">Player Two</h2>
							<p id="playerTwoWinLose"></p>
							Die One: <div id="playerTwoOneBeat"></div>
							Die Two: <div id="playerTwoTwoBeat"></div>
							<div class="playerTotal">Total: <div id="playerTwoTotalBeat"></div></div>
							<p>Bet: <input type="text" id="playerTwoBetBeat" name="playerTwoBet" value="0"></p>
							<div class="winnings">Winnings: <div id="playerTwoWinnings">0</div></div>
							<div class="gold">Gold: <div id="playerTwoGold">300</div></div>
						</div>
					</div>
					<div id="playerThreeBeat">
						<div id="playerThreeRollsBeat">
							<h2 class="bartendPlayerName">Player Three</h2>
							<p id="playerThreeWinLose"></p>
							Die One: <div id="playerThreeOneBeat"></div>
							Die Two: <div id="playerThreeTwoBeat"></div>
							<div class="playerTotal">Total: <div id="playerThreeTotalBeat"></div></div>
							<p>Bet: <input type="text" id="playerThreeBetBeat" name="playerThreeBet" value="0"></p>
							<div class="winnings">Winnings: <div id="playerThreeWinnings">0</div></div>
							<div class="gold">Gold: <div id="playerThreeGold">300</div></div>
						</div>
					</div>
					<div id="playerFourBeat">
						<div id="playerFourRollsBeat">
							<h2 class="bartendPlayerName">Player Four</h2>
							<p id="playerFourWinLose"></p>
							Die One: <div id="playerFourOneBeat"></div>
							Die Two: <div id="playerFourTwoBeat"></div>
							<div class="playerTotal">Total: <div id="playerFourTotalBeat"></div></div>
							<p>Bet: <input type="text" id="playerFourBetBeat" name="playerFourBet" value="0"></p>
							<div class="winnings">Winnings: <div id="playerFourWinnings">0</div></div>
							<div class="gold">Gold: <div id="playerFourGold">300</div></div>
						</div>
					</div>
				</div><!-- Beat the Bartender gamespace-->
			</div><!--end of Beat the Bartender -->
			<script src="js/beatTheBartender.js"></script>
		</body>
	</html>