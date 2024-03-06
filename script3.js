console.log("olá mundo");
const startButton = document.querySelector("#startButton");
const tableGame = document.querySelector(".table");
const gameOverText = document.querySelector(".gameOverText");
let arr = [];
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



const cells = document.querySelectorAll(".cell");

let playerOne = player();
playerOne.setMark("x");
let playerTwo = player();
playerTwo.setMark("o");

function resetGame() {
	arr = [];
	cells.forEach((cell) => {
		cell.classList.remove("x", "o");
	});
	playerOne.playerReset();
	playerTwo.playerReset();
	count = 0;
	tableGame.style.filter = "blur()";
	gameOverText.style.display = "none";
	cells.forEach((cell) => {
		cell.innerText = "";
	});
}
function markCell(mark) {
	const cellClass = "." + mark;
	const xMark = document.querySelectorAll(cellClass);
	xMark.forEach((el) => {
		el.innerText = mark;
	});
}
let timePlayer;
let previousPlayer;
if (!timePlayer) {
	timePlayer = playerOne;
	previousPlayer = playerTwo;
}
let winner = "";
const clickCell = function (arr) {
	let cell = "";
	for (let i = 0; i < cells.length; i++) {
		cells[i].addEventListener("click", () => {
			console.log(`Player ${timePlayer.getMark()} clicked cell ${i}`);
			if (arr.includes(i) || cells[i].classList.contains(previousPlayer.getMark())) {
				console.log(`Cell ${i} already marked`);
				console.log("try again");
			} else {
				cells[i].classList.add(`${timePlayer.getMark()}`);
				markCell(timePlayer.getMark());

				arr.push(i);
				arr.sort();
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
					showWinner();
				}
				if (count >= 9) {
					console.log(`It's a draw!`);
					draw();
				}
				console.log("arr:", arr);
				console.log("count:", count);
				console.log("Player One", playerOne.getCells());
				console.log("Player Two", playerTwo.getCells());
				timePlayer === playerOne
					? (timePlayer = playerTwo)
					: (timePlayer = playerOne);
				previousPlayer === playerOne
					? (previousPlayer = playerTwo)
					: (previousPlayer = playerOne);
			}
		});
	}
	return { resetGame };
};

function showWinner() {
	gameOverText.innerHTML = `Player<br><span>${timePlayer.getMark()}</span><br>wins!`;

	tableGame.style.filter = "blur(.4rem)";
	gameOverText.style.display = "block";

	console.log(`Player ${timePlayer.getMark()} wins!!`);
}

function draw(){
	gameOverText.innerHTML = `It's a draw!`;

	tableGame.style.filter = "blur(.4rem)";
	gameOverText.style.display = "block";
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

	function playerReset() {
		cells = [];
	}

	return {
		getMark,
		setMark,
		getCells,
		setCells,
		getPoints,
		increasePoints,
		playerReset,
	};
}

let isGameOver = false;

function gamePlay() {
	clickCell(arr);
}
gamePlay();

startButton.addEventListener("click", () => {
	resetGame();
	arr = [];
	cells.forEach((cell) => {
		cell.classList.remove("x");
		cell.classList.remove("o");
	});
	playerOne.playerReset();
	playerTwo.playerReset();
	count = 0;
	tableGame.style.filter = "blur()";
	gameOverText.style.display = "none";
	cells.forEach((cell) => {
		cell.innerText = "";
	});
	gamePlay();
});
