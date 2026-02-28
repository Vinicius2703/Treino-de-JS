let nome = document.getElementById("nomes")
let nomeInfo = document.getElementById("name")

let cargo = document.getElementById("cargos")
let cargoInfo = document.getElementById("car")

let gmail = document.getElementById("email")
let emailInfo = document.getElementById("em")

let git = document.getElementById("gitub")
let gitInfo = document.getElementById("gith")

let linkedin = document.getElementById("link")
let linkInfo = document.getElementById("li")

let butao = document.getElementById("botao")
let escuro = document.getElementById("mode")
let modo = true


function verifica(){
    if (nome.value.length > 8 && cargo.value.length > 8 && git.value.length > 8 && linkedin.value.length > 8 && gmail.value.length > 8){
        butao.disabled = false

    } 
}
nome.addEventListener('blur', () =>{
    let nomeReal = nome.value.length;
    if ( nomeReal < 8) {
        nome.style.borderColor = "orange"
    } else {
        nome.style.borderColor = "green"
    }

    verifica()

})

cargo.addEventListener('blur', () =>{
    let cargoReal = cargo.value.length;
    if ( cargoReal < 8) {
        cargo.style.borderColor = "orange"
    } else {
        cargo.style.borderColor = "green"
    }

    verifica()
})

gmail.addEventListener('blur', () =>{
    let gmailReal = gmail.value.length;
    if ( gmailReal < 8) {
        gmail.style.borderColor = "orange"
    } else {
        gmail.style.borderColor = "green"
    }

    verifica()
})

git.addEventListener('blur', () =>{
    let gitReal = git.value.length;
    if ( gitReal < 8) {
        git.style.borderColor = "orange"
    } else {
        git.style.borderColor = "green"
    }

    verifica()
})

linkedin.addEventListener('blur', () =>{
    let linkedinReal = linkedin.value.length;
    if ( linkedinReal < 8) {
        linkedin.style.borderColor = "orange"
    } else {
        linkedin.style.borderColor = "green"
    }

    verifica()

})

butao.addEventListener('click', () => {
            alert('card atualizado com sucesso!!')

            nomeInfo.innerText = nome.value;
            cargoInfo.innerText = cargo.value;
            emailInfo.innerText = gmail.value;
            gitInfo.innerText = 'GitHub: ' + git.value;
            linkInfo.innerText = 'Linkedin: ' + linkedin.value;

            nome.value = ''
            cargo.value = ''
            gmail.value = ''
            git.value = ''
            linkedin.value = ''

            nome.style.borderColor = ''
            cargo.style.borderColor = ''
            gmail.style.borderColor = ''
            git.style.borderColor = ''
            linkedin.style.borderColor = ''

            butao.disabled = true


})

let cards = document.getElementById("card")
let title = document.getElementById("titulo")

escuro.addEventListener('click', () => {
    if (modo === true){
        document.body.style.backgroundColor = "#02001f"
        title.style.color = "white"

        cards.style.backgroundColor = "#334155"
        nome.style.backgroundColor = "#2d3a4e"
        nome.style.borderColor = "#6886af"
        nome.style.color = "white"

        cargo.style.backgroundColor = "#2d3a4e"
        cargo.style.borderColor = "#6886af"
        cargo.style.color = "white"

        gmail.style.backgroundColor = "#2d3a4e"
        gmail.style.borderColor = "#6886af"
        gmail.style.color = "white"

        git.style.backgroundColor = "#2d3a4e"
        git.style.borderColor = "#6886af"
        git.style.color = "white"

        link.style.backgroundColor = "#2d3a4e"
        link.style.borderColor = "#6886af"
        link.style.color = "white"

        modo = false
    } else {

        document.body.style.backgroundColor = "#f0f2f5"
        title.style.color = "black"

        cards.style.backgroundColor = "white"

        nome.style.backgroundColor = "white"
        nome.style.borderColor = "#e2e8f0"
        nome.style.color = "black"

        cargo.style.backgroundColor = "white"
        cargo.style.borderColor = "#e2e8f0"
        cargo.style.color = "black"

        gmail.style.backgroundColor = "white"
        gmail.style.borderColor = "#e2e8f0"
        gmail.style.color = "black"

        git.style.backgroundColor = "white"
        git.style.borderColor = "#e2e8f0"
        git.style.color = "black"

        link.style.backgroundColor = "white"
        link.style.borderColor = "#e2e8f0"
        link.style.color = "black"

        modo = true
    }
    
})

