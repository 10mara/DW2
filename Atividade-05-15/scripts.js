const btnBotoes = document.querySelectorAll("[btn-numero]")
const btnOperacoes = document.querySelectorAll("[btn-operador]")
const btnIgual = document.querySelector("[btn-igual]")
const btnDelete = document.querySelector("[btn-delete]")
const btnAC = document.querySelector("[btn-ac]")
const bufferElemento = document.querySelector("[txt-buffer]")
const displayElemento = document.querySelector("[txt-display]")
const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento,
  displayTextoElemento: displayElemento, 
}

btnAC.addEventListener("click", () => {
  limpaVariaveis(calculadora)
})


btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora)
})


btnIgual.addEventListener("click", () => {
  executaCalculo(calculadora)
})


btnBotoes.forEach(button => {
  button.addEventListener('click', () => adicionaNumero(calculadora, button.textContent))
})


btnOperacoes.forEach(button => {
  button.addEventListener('click', () => escolheOperador(calculadora, button.textContent))
})

function atualizaDisplay(calculadora) {
    calculadora.bufferTextoElemento.textContent = `${calculadora.operandoAnterior} ${calculadora.operador}`.trim()
    calculadora.displayTextoElemento.textContent = calculadora.operandoAtual || "0"
}


function limpaVariaveis(calculadora) {
    calculadora.operador = ""
    calculadora.operandoAnterior = ""
    calculadora.operandoAtual = ""
    
    atualizaDisplay(calculadora)
}

function adicionaNumero(calculadora, numero) {
    if (numero === "." && calculadora.operandoAtual.includes(".")) return
    calculadora.operandoAtual += numero
    atualizaDisplay(calculadora)
}

function escolheOperador(calculadora, operador) {
    if (calculadora.operandoAtual === "") return
    if (calculadora.operandoAnterior !== "") executaCalculo(calculadora)
  
    calculadora.operador = operador
    calculadora.operandoAnterior = calculadora.operandoAtual
    calculadora.operandoAtual = ""
    atualizaDisplay(calculadora)
}

function executaCalculo(calculadora) {
  const atual = parseFloat(calculadora.operandoAtual)
  const anterior = parseFloat(calculadora.operandoAnterior)

  if (isNaN(anterior) || isNaN(atual)) return
  let resultado = 0
  if (calculadora.operador === "+") resultado = anterior + atual
  else if (calculadora.operador === "÷") resultado = atual === 0 ? "erro" : anterior / atual
  else if (calculadora.operador === "*") resultado = anterior * atual
  else if (calculadora.operador === "-") resultado = anterior - atual
  calculadora.operandoAtual = resultado.toString()
  calculadora.operandoAnterior = ""
  calculadora.operador = ""
  atualizaDisplay(calculadora)

}

function apagaDigito(calculadora) {
  calculadora.operandoAtual = calculadora.operandoAtual.slice(0, -1)
  atualizaDisplay(calculadora)

}
