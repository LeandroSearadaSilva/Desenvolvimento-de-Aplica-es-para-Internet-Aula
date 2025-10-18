
    let botao = document.querySelector("#butao")
    let botaom = document.querySelector("#botaom")
    let numero = document.getElementById("numero")
    
    botao.addEventListener("click", () => {
        numero.textContent = Number(numero.textContent) + 1
    })
    botaom.addEventListener("click", () => {
       // o if -> return impede que o contador fique com a númeração negativa
        if(Number(numero.textContent)===0){
            return
        }
         numero.textContent = Number(numero.textContent) - 1
    })
    