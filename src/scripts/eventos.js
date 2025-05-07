import { adicionar, somar } from "../script.js"
import { elementos, variaveis } from "./context.js"
import { copiarResultado } from "./display.js"
import { abrirHistorico } from "./historico.js"
import { limpar, limparTudo } from "./limpar.js"

// ele percorre todos os botoes com data-valor e pega os valores do data-valor e verifica se e um numero, caso seja ele passa como numero, caso nao seja ele passa como string
document.querySelectorAll("[data-valor]").forEach(botao => {
  botao.addEventListener("click", () => {
    const dataValor = botao.getAttribute("data-valor")
    const valor = isNaN(dataValor) ? dataValor : Number(dataValor)

    adicionar(valor)
  })
})

// ele adiciona um evento de presionamento de teclas do teclado a pagina em si, 
// ele verifica a tecla precionada e confere se e uma tecla libera, caso seja ele ignora a tecla precionada
// assim evitando erros imprevisiveis por liberar a digitação com input ou coisa do tipo
window.addEventListener("keydown", ({key, ...event}) => {

  if (!variaveis.teclasLiberas.includes(key)) return

  if (key == "Enter") return somar()
  if (key == "Backspace") return limpar()
  if (key == "Delete") return limparTudo()
  if (key == "H" || key == "h") return abrirHistorico()
  if (key == ",") return adicionar(".") // converto a tecla virgula para ponto

  // faço a mesma coisa dos botões
  const tecla = key
  const valor = isNaN(tecla) ? tecla : Number(tecla)

  adicionar(valor)
})

// adiciono as funcionalidades para os outros botões
elementos.historicoButao.addEventListener("click", () => abrirHistorico())
elementos.limparButao.addEventListener("click", () => limpar())
elementos.limparTudoButao.addEventListener("click", () => limparTudo())
elementos.somarButao.addEventListener("click", () => somar())
elementos.resultadoDisplay.addEventListener("click", () => copiarResultado())