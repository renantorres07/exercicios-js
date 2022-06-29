/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, pretendese adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.*/

// Resolução 1
function calcularMedia(numeros) {
const quantidadeDeNumeros = numeros.length
let somaTotal = 0
for(numero of numeros) {
somaTotal += numero
}
return somaTotal / quantidadeDeNumeros
}

// Resolução 2
function calcularMedia(numeros) {
const quantidadeDeNumeros = numeros.length
const somaTotal = numeros.reduce((numeroA, numeroB) => numeroA + numeroB)
return somaTotal / quantidadeDeNumeros
}
