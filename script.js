const nome = document.getElementById("nomePessoa")
const altura1 = document.getElementById ("altura")
const peso1 = document.getElementById ("peso")
const botao1 = document.getElementById("botao")
const resultado1 = document.getElementById("resultado")

function IMC(){
     resultado1.value = parseFloat(peso1.value) / (parseFloat(altura1.value) * parseFloat(altura1.value))
}


botao1.addEventListener("click", IMC)

