// preparo as variaveis globais, assim eu posso usa-las em qualquer parte do codigo

let operacao = []
let resultado = 0
let historico = []
const teclasLiberas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", ",", "*", "/", "+", "-", "Enter", "Backspace", "Delete", "h", "H"]

const calculoDisplay = document.getElementById('calculoDisplay')
const resultadoDisplay = document.getElementById('resultadoDisplay')
const historicoElement = document.getElementById("historico")
const historicoButao = document.getElementById("but-historico")
const limparButao = document.getElementById("limpar")
const limparTudoButao = document.getElementById("limparTudo")
const somarButao = document.getElementById("somar")
const historicoDisplay = document.getElementById("historicoDisplay")

export let variaveis = {operacao, resultado, historico, teclasLiberas}
export let elementos = {calculoDisplay, resultadoDisplay, historicoElement, historicoButao, limparButao, limparTudoButao, somarButao, historicoDisplay}