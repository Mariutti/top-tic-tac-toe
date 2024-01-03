const GameBoard = (function () {
	let gameBoard = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			gameBoard.push([i, j]);
		}
	}
	this.gameBoard = gameBoard;

	const gameMove = () => {
		return "moved";
	};

	return { gameBoard, gameMove };
})();

const ScoreBoard = (function () {
	const getPlayerOnePoints = (playerOne = null, playerTwo) => {
		return !!playerOne ? playerOne.getPoints() : 0;
	};
	const getPlayerTwoPoints = (playerOne, playerTwo) => {
		return !!playerTwo ? playerTwo.getPoints() : 0;
	};

	return { getPlayerOnePoints, getPlayerTwoPoints };
})();

const createPlayer = function (pmark) {
	let mark = pmark;
	let points = 0;

	const getPoints = () => points;
	const increasePoints = () => {
		points++;
	};

	return { mark, getPoints, increasePoints };
};

// const teste = GameBoard.gameBoard.splice(1,1)
// console.log(teste);

console.log(GameBoard);
console.log(GameBoard.gameBoard);
console.log(GameBoard.gameMove());

const playerOne = createPlayer("x");
