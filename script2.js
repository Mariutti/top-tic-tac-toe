console.log("olá mundo");
const startButton = document.querySelector("#startButton");

startButton.addEventListener("click", () => {
	gamePlay();
});

const cell = document.querySelectorAll('.cell')

console.log(cell)

function addtoev() {
	for (let i = 0; i < cell.length; i++) {
		cell[i].addEventListener("click", function() {
		  alert(`You clicked cell ${i}`); 
	  });
	 }
  }
  window.addEventListener("load",function() {
	addtoev();
  });

function chooseNumOfPlayers() {
	let playerNumb = prompt("How many player at this game?");

	if (playerNumb) {
		if (playerNumb.toLowerCase() === ("1" || "one")) {
			console.log("One player");
			return 1;
		} else if (playerNumb.toLowerCase() === ("2" || "two")) {
			console.log("Two players");
			return 2;
		} else {
			console.log("Please, choose 1 or 2.");
			chooseNumOfPlayers();
		}
	} else {
		console.log("Jogo cancelado.");
		return null;
	}
}

function player() {
	let mark;
	let points = 0;
	let cells = [];

	function getMark() {
		return mark;
	}

	function setMark(markToSet) {
		mark = markToSet;
	}

	function getCells() {
		return cells;
	}

	function setCells(cell) {
		cells.push(cell);
		cells.sort();
	}

	function getPoints() {
		return points;
	}

	function increasePoints() {
		points++;
	}

	return { getMark, setMark, getCells, setCells, getPoints, increasePoints };
}

function chooseMarksFunc(playerOne, playerTwo) {
	playerOne.setMark(prompt("Please, select 'x' or 'o'"));

	if (playerOne.getMark()) {
		if (
			playerOne.getMark().toLowerCase() === "x" ||
			playerOne.getMark().toLowerCase() === "o"
		) {
			playerOne.getMark() == "x"
				? playerTwo.setMark("o")
				: playerTwo.setMark("x");
			console.log(`jogador 1 seleciona a marca ${playerOne.getMark()}`);
			console.log(`jogador 2 fica com a marca ${playerTwo.getMark()}`);
			return { playerOne, playerTwo };
		} else {
			return chooseMarksFunc();
		}
	} else {
		console.log("Jogo cancelado.");
		return null;
	}
}

function gamePlay() {
	console.clear();
	let playerOne = player();
	let playerTwo = player();

	let timePlayer = playerOne;

	// Escolhendo o número de jogadores (p vs IA ou p vs p)
	// const numOfPlayers = chooseNumOfPlayers();
	// if (numOfPlayers === null) {
	// 	return;
	// }

	// Jogador 01 escolhe a marca que usará
	const chooseMarks = chooseMarksFunc(playerOne, playerTwo);

	console.log("");

	// gerando o tabuleiro
	const GameBoard = (function () {
		console.log("gerando board");
		let gameBoard = [];
		for (let i = 0; i < 9; i++) {
			gameBoard.push(i);
		}
		let markedCells = [];
		let winArrays = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		function gameMove(i) {
			if (gameBoard.indexOf(i) != -1 && markedCells.indexOf(i) == -1) {
				const string = `Marked square- [${i}]`;
				markCell(gameBoard[i]);
				// return string;
				return true;
			} else {
				// return `Cannot mark square ${i}`;
				return false;
			}
		}

		function markCell(cell) {
			markedCells.push(cell);
			markedCells.sort();
		}

		return {
			gameBoard,
			markedCells,
			winArrays,
			gameMove,
		};
	})();

	// jogada: jogador marca célula do tabuleiro
	function playerMove(player) {
		return Number(prompt(`Please, player ${player}, choose one cell`));
	}

	console.log(`Marked cells: ${GameBoard.markedCells}`);

	console.log("");

	console.log("gamming loop");
	console.log(GameBoard.gameBoard);
	let i = 0;
	let isGameOver = false;
	let winner = "";

	// IIEF to generate de game
	const gameFlow = (function () {
		while (isGameOver != true && i < 9) {
			let cell = playerMove(timePlayer.getMark());
			console.log(`player time: ${timePlayer.getMark()}`);
			if (!GameBoard.gameMove(cell)) {
				console.log(
					`player ${timePlayer.getMark()} tried to mark cell ${cell}, but it's already marked`
				);
				console.log("try again");
			} else {
				timePlayer.setCells(cell);
				// console.log(`jogada ${i} finalizada`)
				console.log(
					`${timePlayer.getMark()} marked cells`,
					timePlayer.getCells()
				);
				console.log("total marked cells", GameBoard.markedCells);
				if (
					GameBoard.winArrays.some((arr) => {
						return arr.toString() === timePlayer.getCells().toString();
					})
				) {
					console.log(`${timePlayer.getMark()} wins!`);
					winner = timePlayer.getMark();
					isGameOver = true;
				}
				timePlayer === playerOne
					? (timePlayer = playerTwo)
					: (timePlayer = playerOne);
				console.log(`jogada ${i} finalizada`);
				i++;
			}
		}
		console.log("inside gameflow", GameBoard.gameBoard);
		console.log("inside gameflow", GameBoard.markedCells);
		console.log("i", i);
		console.log("isGameOver", isGameOver);
	})();
	if (isGameOver === false) {
		console.log(`It's a draw!`);
	} else {
		console.log(`JOGO FINALIZADO, player ${winner} WINS`);
	}
	console.log("");
}
