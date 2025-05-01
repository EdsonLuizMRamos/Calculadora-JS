import { variaveis } from "./scripts/context.js"
import { salvarHistorico } from "./scripts/historico.js"
import "./scripts/eventos.js"
import "./scripts/precarregamento.js"
import { atualizarDisplay, calcularResultado } from "./scripts/display.js"

let {operacao} = variaveis

export function adicionar(valor) {

  // verifica se o primeiro valor do array existe e garante que nao seja underfined
  let ultimoValor = operacao[operacao.length - 1] ?? ""
  if (operacao[0] == undefined) operacao.pop()

  // verifica se o ultimo valor e o valor passado é um numero ou um ponto
  if ( ( typeof ultimoValor == "number" || ultimoValor.endsWith(".") ) && ( valor == "." || typeof valor == "number" ) ) {
    let atualizar

    // verifica se ja existe algum ponto no ultimo valor, caso exista ele nao permite a adição do ponto
    if (podeAdicionarPonto(`${ultimoValor}${valor == "." ? "." : valor}`)) {
      atualizar = `${ultimoValor}${valor == "." ? "." : valor}`
    } else {
      atualizar = `${ultimoValor}${valor == "." ? "" : valor}`
    }

    // remove o ultimo item do array, que seria o numero, 
    // exemplo, [ 1, "+, 2 ] ele removeria o 2 que seria substituido pela variavel atualizar
    // que e formada pelo ultimo numero e o valor, ficando [ 1, "+", 26 ], caso o valor seja 6
    operacao.pop()
    
    // verifica se o ultimo valor do array nao termina com ponto para evitar erro no console ao calcular com eval()
    if (!atualizar.endsWith(".")) {
      atualizar = parseFloat(atualizar)
      operacao.push(atualizar)
      atualizarDisplay()
    } else {
      // atualiza somente o campo de calculo do display
      operacao.push(atualizar)
      atualizarDisplay("calculo")
    }
    
    return

  } else if (valor != ".") {
    // verifica se o array esta vazio e se o valor passado nao e um string, assim parando a função para evitar bugs 
    if (operacao.length == 0 && typeof valor == "string") return
    // verifica se o ultimo valor do array ee um operador, caso seja ele remove o operador para adicionar outro no lugar
    if ( ( ultimoValor == "+" || ultimoValor == "-" || ultimoValor == "*" || ultimoValor == "/" ) && typeof valor == "string" ) {
      operacao.pop()
    }
    // adiciona o operador e atualiza o display
    operacao.push(valor)
    atualizarDisplay()
  }

}

export function podeAdicionarPonto(expressao) {

  // ele separa um array so com os pontos da expressao, assim pegando o tamanho dele e retornando se ele e menor ou igual a 1
  const ultimaParte = expressao.split(/[\+\-\*/]/).pop()
  const numPontos = (ultimaParte.match(/\./g) || []).length
  return numPontos <= 1

}

export function somar() {

  // verifica se o array esta vazio ou se o ultimo item do array não e um operador
  if (operacao.length <= 1 || typeof operacao[operacao.length - 1] == "string") return
  
  // calculo, salvo no historico, reseto o array de operação para o resultado do calculo e atualizo o display
  let calculo = calcularResultado().resultado
  salvarHistorico(calculo)
  operacao.splice(0, operacao.length, calculo)

  atualizarDisplay()

}
