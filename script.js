const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");
const bobao = document.getElementById("bobao");
const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");

botaoNao.addEventListener("mouseover", () => {
	const x = Math.random() * (window.innerWidth - container.offsetWidth);
	const y = Math.random() * (window.innerHeight - container.offsetHeight);
	container.style.position = "absolute";
	container.style.left = `${x}px`;
	container.style.top = `${y}px`;

	// Mostra a mensagem
	bobao.textContent = "Ih... vai ter que jogar com sua irmãzinha querida hein bobão";
});

botaoSim.addEventListener("click", () => {
	// Centraliza o container
	container.style.position = "static";
	container.style.left = "auto";
	container.style.top = "auto";
	container.style.transform = "none";

	// Esconde os botões "Sim" e "Não"
	buttons.style.display = "none";

	bobao.textContent = "";

	// Mostra a mensagem
	mensagem.textContent =
		"Você agora vai ter que jogar minezin comigo por livre e espontânea vontade. Te amo, Peidinho! 💙";

	// Cria o botão de restart
	const botaoRestart = document.createElement("button");
	botaoRestart.textContent = "Reiniciar";
	botaoRestart.id = "restart";
	container.appendChild(botaoRestart);

	// Adiciona evento ao botão de restart
	botaoRestart.addEventListener("click", () => {
		// Reseta tudo
		buttons.style.display = "block";
		mensagem.textContent = "";
		bobao.textContent = "";
		botaoRestart.remove();
	});
});
