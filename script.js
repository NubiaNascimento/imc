const nome = document.getElementById("nomePessoa")
const altura1 = document.getElementById ("altura")
const peso1 = document.getElementById ("peso")
const botao1 = document.getElementById("botao")
const resultado1 = document.getElementById("resultado")

function IMC(){
     resultado1.textContent = nome.value + " seu imc é: " + (peso1.value / (altura1.value * altura1.value)).toFixed(2)
}


botao1.addEventListener("click", IMC)

