let nome = prompt('qual seu nome?');
let saudacao = document.getElementById('saudacao');

function saudar(nome, saudacao){
    saudacao.innerText = 'ola ' + nome;
};
saudar(nome,saudacao)

const receber = document.getElementById('input')
const botao = document.getElementById('botao')
let resultado = document.getElementById('resultado')



botao.addEventListener('click', () => {
    let idade = receber.value.trim();
    let idadeEmInt = Number(idade);

    if (idade === "" || isNaN(idadeEmInt)) {
        resultado.innerText = 'Por favor, digite uma idade válida!';
    } 
    else if (idadeEmInt < 18) {
        resultado.innerText = 'ACESSO NEGADO';
    } 
    else {
        resultado.innerText = 'ACESSO LIBERADO!';
    }
});
