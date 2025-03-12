const botaoNao = document.getElementById("nao");
const botaoSim = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");
const bobona = document.getElementById("bobona");
const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");

botaoNao.addEventListener("mouseover", () => {
	const x = Math.random() * (window.innerWidth - container.offsetWidth);
	const y = Math.random() * (window.innerHeight - container.offsetHeight);
	container.style.position = "absolute";
	container.style.left = `${x}px`;
	container.style.top = `${y}px`;

	// Mostra a mensagem
	bobona.textContent = "Ih... vai ter que me grelhar hein bobona";
});

botaoSim.addEventListener("click", () => {
	// Centraliza o container
	container.style.position = "static";
	container.style.left = "auto";
	container.style.top = "auto";
	container.style.transform = "none";

	// Esconde os botões "Sim" e "Não"
	buttons.style.display = "none";

	bobona.textContent = "";

	// Mostra a mensagem
	mensagem.textContent =
		"Você agora vai me fazer de misto quente por livre e espontânea vontade. Te amo, tá certo Lina? ❤️";

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
		bobona.textContent = "";
		botaoRestart.remove();
	});
});
