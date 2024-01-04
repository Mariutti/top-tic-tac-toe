const GameBoard = (function () {
	let gameBoard = [];
	for (let i = 0; i < 9; i++) {
		gameBoard.push(i);
	}

	function gameMove(i) {
		if (gameBoard.indexOf(i) != -1) {
			const string = `Moved square- [${i}]`;
			gameBoard.splice(gameBoard.indexOf(i), 1);
			return string;
		} else {
			return `Cannot mark square ${i}`;
		}
	}

	return {
		gameBoard,
		gameMove,
	};
})();

function createPlayer(mark) {
	let points = 0;

	const getPoints = () => points;
	const increasePoints = () => {
		points++;
	};

	return { mark, getPoints, increasePoints };
}

const gameFlow = (() => {
	const pOne = createPlayer("x");
	const pTwo = createPlayer("o");

	let playerOne = `Player ${pOne.mark}`;
	let playerTwo = `Player ${pTwo.mark}`;

	let turn = playerOne;
	function getSquare(i) {
		GameBoard.gameMove(i);
		console.log(`${turn} marks square ${i}`);
		console.log("Squares left", GameBoard.gameBoard);
	}
	let changeTurn = () => {
		return turn == playerOne ? (turn = playerTwo) : (turn = playerOne);
	};

	let showTurn = () => {
		return turn;
	};

	return { changeTurn, showTurn, getSquare };
})();

const gameController = (() => {
	const game = (i) => {
		console.log(gameFlow.showTurn());
		gameFlow.getSquare(i);
		gameFlow.changeTurn();
		console.log("----------------");
	};

	return { game };
})();

// console.log(GameBoard.gameBoard);

const playerOne = createPlayer("x");
playerOne.increasePoints();
playerOne.increasePoints();
playerOne.getPoints();

// console.log("----------------");

// console.log(GameBoard.gameBoard);
// console.log("----------------");

// console.log(gameFlow.showTurn());
// console.log(gameFlow.getSquare(4));
// console.log(GameBoard.gameBoard);
// gameFlow.changeTurn();
// console.log("----------------");

gameController.game(1);
gameController.game(2);
