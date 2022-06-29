/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.*/

// Resolução 1
function simboloMais(quantidade) {
let resultado = ''
for(let i = 0; i < quantidade; i++)
resultado += '+'
return resultado
}

// Resolução 2
function simboloMais(quantidade) {
return Array(quantidade).fill('+').join('')
}

// Resolução 3
function simboloMais(quantidade) {
return "+".repeat(quantidade)
}
