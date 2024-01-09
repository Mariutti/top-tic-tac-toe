console.log("selecione o número de players");
const startButton = document.querySelector("#startButton");

startButton.addEventListener("click", () => {
	// console.log("test");
	playersNumb();
});

const playersNumb = function () {
	let playerNumb = prompt("How many player at this game?");

	if (playerNumb) {
		if (playerNumb.toLowerCase() === ("1" || "one")) {
			console.log("One player");
		} else if (playerNumb.toLowerCase() === ("2" || "two")) {
			console.log("Two players");
		} else {
			console.log("Please, choose 1 or 2.");
			playersNumb();
		}
	} else {
		console.log("jogador desistiu");
	}
};

console.log("");

console.log("jogador 1 seleciona a marca (x ou o)");
console.log("jogador 2 fica com marca que sobrar");

console.log("");

console.log("jogo gera o tabuleiro");

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
