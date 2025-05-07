import { elementos, variaveis } from "./context.js"
import { separadorPorMilhar, gerarOperacaoDisplay } from "./display.js"

let {operacao, historico} = variaveis
let {historicoElement, historicoButao, historicoDisplay} = elementos

export function carregarHistorico() {
  let historicoStorage = JSON.parse(localStorage.getItem("historico")) ?? []
  historico = historicoStorage
  atualizarHistoricoDisplay()
}

export function salvarHistorico(calculo) {

  if (historico.length >= 15) {
    historico.shift()
  }
  historico.push({operacao, calculo})
  adicionarHistorico({operacao, calculo})

  localStorage.setItem("historico", JSON.stringify(historico))

}

export function removerDoHistorico(index) {


  historico.splice(index, 1)
  localStorage.setItem("historico", JSON.stringify(historico))

  historicoDisplay.innerHTML = ""
  atualizarHistoricoDisplay()

}

export function abrirHistorico() {
  historicoElement.classList.toggle("h-open")
  historicoButao.classList.toggle("h-open")
}

export function atualizarHistoricoDisplay() {
  
  if (historico.length <= 0) return
  
  historico.map((item, index) => {
    adicionarHistorico(item, index)
  })

}

export function adicionarHistorico(item, index) {

  const div = document.createElement("div")
    div.classList.add("historico-item")
    div.setAttribute("index", index)
    div.innerHTML = `
        <p class="d-calculo">${gerarOperacaoDisplay(item.operacao).operacaoEmDisplay}</p>
        <p class="d-resultado">${separadorPorMilhar(item.calculo)}</p>
        `
    historicoDisplay.appendChild(div)
    div.addEventListener("click", () => {
      removerDoHistorico(index)
      div.remove()
    })

}