/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares*/

// Resolução 1
function receberSomenteOsParesDeIndicesPares(numeros) {
let resultado = []
for(let i = 0; i < numeros.length; i += 2){
const numeroPar = numeros[i] % 2 === 0
if(numeroPar)
resultado.push(numeros[i])
}
return resultado
}

// Resolução 2
function receberSomenteOsParesDeIndicesPares(numeros) {
return numeros.filter((numero, indice) => {
const numeroPar = numero % 2 === 0
const indicePar = indice % 2 === 0
return numeroPar && indicePar
})
}