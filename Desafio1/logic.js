let num = 0; // contador 
let info = document.getElementById('info');    // PEGAM O ELEMENTO DO HTML PELO ID
const botao = document.getElementById('botao');//  EX: (<h2 id= "info"> sei la <h2/>)

botao.addEventListener('click', ()=>{
    //Imagine que o botao é um interfone. O addEventListener diz ao navegador:
    //"Fique ouvindo (listen) este botão. Se alguém apertar (click), execute
    // o que estiver dentro das chaves { }".
    num++
    info.innerText = 'você clicou no botão ' + num + ' vezes';
    if(num == 63){
        alert('nah! perdi a conta, vamos contar de novo!');
        info.innerText = 'você clicou no botão 0 vezes';
        num = 0;
    }
})
