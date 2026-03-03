let email = document.getElementById("e") 
let senha = document.getElementById("s") 
let botao = document.getElementById("b")
let cont = document.getElementById("conteudo")


botao.addEventListener('click', () => {
    let emailOf = email.value;
    let senhaOf = senha.value;

    const emais = [{email:"vcf2@cin.ufpe.br", senha:"1234"},
                    {email:"vmm4@cin.ufpe.br", senha:"4321"}
    ]

    if(emailOf === "" || senhaOf === ""){
        cont.innerText = "por favor digite seu email ou senha";
        cont.style.color = 'orange'
        return
    }

    const usuarioEncontrado = emais.find(user => user.email === emailOf);

    if(!usuarioEncontrado){
        cont.innerText = "usuario nao encontrado";
        cont.style.color = 'red'
    } else if (usuarioEncontrado.email === emailOf && usuarioEncontrado.senha === senhaOf){
        cont.innerText = "Bem vindo";
        cont.style.color = 'green'
    } else{
        cont.innerText = "senha errada";
        cont.style.color = 'red'
    }


})
