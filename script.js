const GameBoard = (function () {
	let gameBoard = [];
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			gameBoard.push([i, j]);
		}
	}

	const gameMove = () => {
		return "moved";
	};

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
};

const gameFlow = (function(){
	let turn;
	
	const ct = changeTurn(){
		turn? !turn : turn;
	}

	return { changeTurn }
})();

// const teste = GameBoard.gameBoard.splice(1,1)
// console.log(teste);

console.log(GameBoard);
console.log(GameBoard.gameBoard);
console.log(GameBoard.gameMove());

const playerOne = createPlayer("x");
playerOne.increasePoints()
playerOne.increasePoints()
playerOne.increasePoints()
playerOne.increasePoints()
playerOne.increasePoints()
playerOne.increasePoints()
playerOne.getPoints()


console.log("----------------");


console.log(playerOne);

gameFlow
console.log(gameFlow);
gameFlow
console.log(gameFlow);

