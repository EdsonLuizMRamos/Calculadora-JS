import { carregarHistorico } from "./historico.js"

// carrega o historico ao iniciar a pagina
carregarHistorico()

// evita que ao clicar em um botão e apertar enter ele ative o botão
window.addEventListener("keydown", (e) => {

  const el = document.activeElement
  const isBotaoOuLink = el?.matches?.("button, [role='button'], a, input[type='submit']")
  if (isBotaoOuLink && (e.key === "Enter" || e.key === " ")) e.preventDefault()
  
  if (e.key === "Tab") e.preventDefault()

})

// evita que a tecla tab fique mudando o foco para os botões da pagina
window.addEventListener("keydown", (e) => {if (e.key === "Tab") e.preventDefault()})