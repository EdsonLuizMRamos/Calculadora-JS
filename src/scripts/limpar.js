import { variaveis } from "./context.js"
import { atualizarDisplay } from "./display.js"

let {operacao, resultado} = variaveis

export function limpar() {

  // verifica se as operações esta vazia
  if (operacao.length == 0) return

  // remove a ultima operação e atualiza o display
  operacao.pop()
  atualizarDisplay()

}
  
export function limparTudo() {

  // verifica se as operações esta vazia
  if (operacao.length == 0) return

  // remove todos os itens do array e seta o resultado para 0 e atualiza o display
  operacao.splice(0, operacao.length)
  resultado = 0
  atualizarDisplay()

}