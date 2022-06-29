//Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

// Resolução 1
function somarNumeros(numeros) {
const quantidadeDeNumeros = numeros.length
return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

// Resolução 2
function somarNumeros(numeros) {
let soma = 0
numeros.forEach(numero => soma += numero)
return soma
}

// Resolução 3
function somarNumeros(numeros) {
const soma = numeros.reduce( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)
return soma
}
