console.log("olá mundo");
const startButton = document.querySelector("#startButton");

startButton.addEventListener("click", () => {
	gameFlow();
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
	return { mark };
}

function chooseMarksFunc() {
	let playerOne = player();
	let playerTwo = player();

	playerOne.mark = prompt("Please, select 'x' or 'o'");

	if (playerOne.mark) {
		if (
			playerOne.mark.toLowerCase() === "x" ||
			playerOne.mark.toLowerCase() === "o"
		) {
			playerOne.mark == "x" ? (playerTwo.mark = "o") : (playerTwo.mark = "x");
			return { playerOne, playerTwo };
		} else {
			return chooseMarksFunc();
		}
	} else {
		console.log("Jogo cancelado.");
		return null;
	}
}

function gameFlow() {
	console.clear();

	// Escolhendo o número de jogadores (p vs IA ou p vs p)
	const numOfPlayers = chooseNumOfPlayers();
	if (numOfPlayers === null) {
		return;
	}

	// Jogador 01 escolhe a marca que usará
	const chooseMarks = chooseMarksFunc();

	console.log("");

	console.log(`jogador 1 seleciona a marca ${chooseMarks.playerOne.mark}`);
	console.log(`jogador 2 fica com marca ${chooseMarks.playerTwo?.mark}`);

	console.log("");

	// gerando o tabuleiro
	const GameBoard = (function () {
		console.log('gerando board');
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

	console.log(GameBoard.gameBoard);

	console.log("");

	console.log("loop de jogadas");
	console.log("jogo verifica quais as células estão disponíveis");

	console.log("");

	console.log("jogador 01 faz jogada");
	console.log("jogo salva jogada/célula marcada");
	console.log("jogo verifica de jogador 01 ganhou");

	console.log("");

	console.log("jogo muda a vez para jogador 2");

	console.log("");

	console.log("jogador 02 faz jogada");
	console.log("jogo salva jogada/célula marcada");
	console.log("jogo verifica de jogador 02 ganhou");

	console.log("");

	console.log("jogo muda a vez para jogador 1");

	console.log(
		"jogo repete os passos no loop de jogada até alguém vencer ou haver empate"
	);

	console.log("");
}
