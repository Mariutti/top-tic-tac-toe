console.log("olá mundo");
const startButton = document.querySelector("#startButton");
const arr = [];
let count = 0;
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

startButton.addEventListener("click", () => {
	console.log(arr);
	console.log("Player One", playerOne.getCells());
	console.log("Player Two", playerTwo.getCells());
	// gamePlay();
});

const cells = document.querySelectorAll(".cell");

let playerOne = player();
playerOne.setMark("x");
let playerTwo = player();
playerTwo.setMark("o");

let timePlayer;
if (!timePlayer) {
	timePlayer = playerOne;
}
let winner = "";
const clickCell = function (arr) {
	let cell = "";
	for (let i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", () => {
			console.log(`You clicked cell ${i}`);
			arr.push(i);
			arr.sort();
			console.log(timePlayer.getMark());
			cell = i;
			timePlayer.setCells(cell);
			count++;
			if (
				winArrays.some((arr) => {
					return arr.toString() === timePlayer.getCells().toString();
				})
			) {
				isGameOver = true;
				winner = timePlayer.getMark();
				return showWinner();
			}
			if (count >= 9) {
				console.log(`It's a draw!`);
				// } else {
				// 	console.log(`JOGO FINALIZADO, player ${winner} WINS`);
			}
			timePlayer === playerOne
				? (timePlayer = playerTwo)
				: (timePlayer = playerOne);
		});
	}
};

function showWinner() {
	console.log(`Player ${timePlayer.getMark()} wins!!`);
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

let isGameOver = false;

(function gamePlay() {
	clickCell(arr);

	// if (isGameOver === false) {
	// 	console.log(`It's a draw!`);
	// } else {
	// 	console.log(`JOGO FINALIZADO, player ${winner} WINS`);
	// }
})();
