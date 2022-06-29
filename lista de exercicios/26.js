/*Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais.*/

// Resolução 1
function removerVogais(frase) {
const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
vogais.forEach( vogal => frase = frase.replace(vogal, '') )
return frase
}

// Resolução 2
function removerVogais(frase) {
return frase.replace(/[aeiou]/ig, '')
}
