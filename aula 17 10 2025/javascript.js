let titulo = document.getElementById("titulo")
let item = document.getElementsByClassName("item")
let botao = document.getElementById("meuBotao")

console.log(titulo)
console.log(item)

titulo.textContent= "Novo Titulo"
titulo.style.color = "blue"
titulo.style.fontSize = "24px"


for(c=0; c<=item.length; c++){
    item[c].textContent = "novo item " + c
    item[c].style.cursor="pointer"
    item[c].addEventListener("click", () => {
        alert(item[c].textContent)
    })
}