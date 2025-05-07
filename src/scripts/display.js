import { variaveis } from "./context.js"

let { resultado, operacao } = variaveis

export function atualizarDisplay(tipo) {

  if (tipo == "calculo") {
    calculoDisplay.innerHTML = gerarOperacaoDisplay(operacao).operacaoEmDisplay
  } else if (tipo == "resultado") {
    resultadoDisplay.textContent = calcularResultado().resultadoEmDisplay
  } else {
    calculoDisplay.innerHTML = gerarOperacaoDisplay(operacao).operacaoEmDisplay
    resultadoDisplay.textContent = calcularResultado().resultadoEmDisplay
  }

}

export function gerarOperacaoDisplay(operacao) {

  let operacaoEmDisplay = ""
  let newOperacao = operacao.map(item => {
    if (item == "*") {
      operacaoEmDisplay += " <span class='operacao'>x</span> "
      return "x"
    } else if (item == "+" || item == "-" || item == "/") {
      operacaoEmDisplay += ` <span class='operacao'>${item}</span> ` 
      return item
    } else {
      operacaoEmDisplay += separadorPorMilhar(item)
      return item
    }
  }).join(" ")

  return {newOperacao, operacaoEmDisplay}

}

export function calcularResultado() {

  let ultimoItem = operacao[operacao.length - 1]

  if (typeof ultimoItem != "number" && ( ultimoItem != "*" || ultimoItem != "/" || ultimoItem != "+" || ultimoItem != "-")) {

    // remove o ultimo item do array, que seria o operador, exemplo, [ 1, "+, 2 ] ele removeria o "+"   
    operacao.pop()
    resultado = eval(operacao.join(" "))
    operacao.push(ultimoItem)

    let resultadoEmDisplay = separadorPorMilhar(resultado)
    return {resultado, resultadoEmDisplay}

  }

  // resultado = eval(operacao.join(" "))
  resultado = math.evaluate(operacao.join(" "))
  let resultadoEmDisplay = separadorPorMilhar(resultado)

  return {resultado, resultadoEmDisplay}

}

export function separadorPorMilhar(numero) {

  if (!numero) return 0

  // uso para trocar o ponto que diferencia casa inteira de decimal por virgula
  let numeroEmString = numero.toString().replace(".", ",")
  // separo a parte inteira do decimal para ficar mais facil de formatar
  const [inteiro, decimal] = numeroEmString.split(",")
  // aqui utilizo um regex que peguei na web para formatar o numero com ponto nas posições corretas
  const inteiroFormatado = inteiro.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  // juntando a parte inteira com a parte decimal verificando se a parte decimal realmente existe para evitar virgulas sem a casa decimal
  numeroEmString = `${inteiroFormatado}${decimal ? `,${decimal}` : ""}`

  return numeroEmString

}

export function copiarResultado() {

  // verificação para nao copiar o texto "copiado!"
  if (resultadoDisplay.textContent != "copiado!") {
    // copio o resultado para uma variavel temporaria e faço a animação do texto trocando do resultado para "copiado!"
    const resultadoCopiado = resultadoDisplay.textContent
    navigator.clipboard.writeText(resultadoCopiado)
  
    resultadoDisplay.classList.add("copiado")
    resultadoDisplay.textContent = "copiado!"
  
    setTimeout(() => {
      resultadoDisplay.classList.remove("copiado")
      resultadoDisplay.textContent = resultadoCopiado
    }, 500)
  }

}