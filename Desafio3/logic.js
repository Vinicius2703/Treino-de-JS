const info = document.getElementById('situacao');
const botao = document.getElementById('botao');
const img = document.getElementById('img');

botao.addEventListener('click', () => {
    if (img.src.includes("dia.png")) { // coisa nova "includes"
        img.src = "noite.png";
        info.innerText = "Está de noite!";
        document.body.style.backgroundColor = "rgb(54, 54, 54)" // arvore hierarquica DOM
        document.body.style.color = "#f0f8ff"
    } else {
        img.src = "dia.png";
        info.innerText = "Está de dia!";
        document.body.style.backgroundColor = "rgb(255, 210, 87)"
        document.body.style.color = "#a70000"
    }
});

