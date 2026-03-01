let avancar = document.getElementById("avanca");
let retornar = document.getElementById("volta");
let conteudo = document.getElementById("conteudos");
let carrossel = document.getElementById("card");

const slides = [
    { cor: "brown", texto: "Receba" },
    { cor: "black", texto: "Recebo" },
    { cor: "blue",  texto: "Recebia" },
    { cor: "green",  texto: "Receberia" },
    { cor: "orange",  texto: "Recebi" },
    { cor: "red",  texto: "Recebesse" },
    { cor: "gray",  texto: "Receberam" },
    { cor: "purple",  texto: "Receberão" }
];

let contador = 0;
let timer; // Variável para guardar o intervalo

function renderizar() {
    const slideAtual = slides[contador];
    carrossel.style.backgroundColor = slideAtual.cor;
    conteudo.innerHTML = slideAtual.texto;
}

// Função para resetar o tempo quando o usuário clica manualmente
function resetarTimer() {
    clearInterval(timer); // Para o cronômetro atual
    iniciarAutoplay();    // Começa um novo do zero
}

function iniciarAutoplay() {
    timer = setInterval(() => {
        avancarSlide();
    }, 3000); // Muda a cada 3 segundos
}

function avancarSlide() {
    contador++;
    if (contador >= slides.length) {
        contador = 0;
    }
    renderizar();
}

function voltarSlide() {
    contador--;
    if (contador < 0) {
        contador = slides.length - 1;
    }
    renderizar();
}

avancar.addEventListener('click', () => {
    avancarSlide();
    resetarTimer(); // Evita que mude sozinho logo após o clique
});

retornar.addEventListener('click', () => {
    voltarSlide();
    resetarTimer(); // Evita que mude sozinho logo após o clique
});

// Inicialização
renderizar();
iniciarAutoplay();