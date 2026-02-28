// variaveis ================================
let email = document.getElementById('email')
let senha = document.getElementById('senha')
let user = document.getElementById('user')
let botao = document.getElementById('botao')
let sitE = document.getElementById('sitE')
let sitS = document.getElementById('sitS')
let sitU = document.getElementById('sitU')

// funçao que verifica se os campos estao aceitaveis 
function verficar(){

    let emailOK = email.value.length;
    let senhaOK = senha.value.length;
    let userOK = user.value.length;

    if(emailOK >= 8 && senhaOK >= 8 && userOK >= 8){
        botao.disabled = false;
    } else{
        botao.disabled = true;
    }
}

function validarE(){
    let emailV = email.value; // aqui coleto os dados, pego o valor que esta no input (o q o usuario digitar)
    let emailof = emailV.length; // aqui converto os dados para numeros, no caso estou pegando
    // o que o usuario pegou e estou contando quantos caracteres ele possui e guardando em
    // uma variavel  

    // todas as condicoes ===================================
    if (emailof >= 8){
        sitE.innerText = "Email aceitável";
        sitE.style.color = 'green';
        email.style.borderColor = 'green';    
        // ACEITOU

    }else if (emailof === 0){

        sitE.innerText = "Por favor digite seu email";
        sitE.style.color = 'orange';
        email.style.borderColor = 'orange';
        // SAI E NAO ESCREVI NADA

    } else{
        sitE.innerText = "Email curto";
        sitE.style.color = 'red';
        email.style.borderColor = 'red';
        //COLOQUEI UMA SENHA MUITO CURTA

    }
    // =========================================================
    verficar()// toda vez que o saio do campo o sistema verifica se tudo esta aceitavel
    // mesmo se nao preenchi todos os campos
};

// A PARTIR DAQUI A LOGICA SEGUE A MESMA PARA OS OUTROS CAMPOS ABAIXO: SENHA E USUARIO

// SENHA ==================================
senha.addEventListener('blur', () => {
    let senhaV = senha.value;
    let senhaof = senhaV.length;

    if (senhaof >= 8){
        sitS.innerText = "Senha aceitável";
        sitS.style.color = 'green';
        senha.style.borderColor = 'green';


    }else if (senhaof === 0){

        sitS.innerText = "Por favor digite sua senha";
        sitS.style.color = 'orange';
        senha.style.borderColor = 'orange';

        
    } else{
        sitS.innerText = "senha curta";
        sitS.style.color = 'red';
        senha.style.borderColor = 'red';

    }
    
    verficar()
})
// ================================================


//USUARIO =========================================
user.addEventListener('blur', () => {
    let userV = user.value;
    let userof = userV.length;

    if (userof >= 8){
        sitU.innerText = "Senha aceitável";
        sitU.style.color = 'green';
        user.style.borderColor = 'green';

    }else if (userof === 0){

        sitU.innerText = "Por favor digite seu nome";
        sitU.style.color = 'orange';
        user.style.borderColor = 'orange';

    } else{
        sitU.innerText = "nome curto";
        sitU.style.color = 'red';
        user.style.borderColor = 'red';

    }
    
    verficar()
})
// ================================================