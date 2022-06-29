/*Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/

// Resolução 1
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
let resultado = []
for(numero of numeros){
const quantidadeDeDigitos = String(numero).length
if(quantidadeDeDigitos === quantidadeDesejada)
resultado.push(numero)
}
return resultado
}

// Resolução 2
function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
return numeros.filter(numero => {
const quantidadeDeDigitos = String(numero).length
return quantidadeDeDigitos === quantidadeDesejada
})
}
