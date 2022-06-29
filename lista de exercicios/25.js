/*A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.*/

// Resolução 1
function buscarPalavrasSemelhantes(inicio, palavras) {
const resultado = []
for (let palavra of palavras)
if (palavra.includes(inicio))
resultado.push(palavra)
return resultado
}

// Resolução 2
function buscarPalavrasSemelhantes(inicio, palavras) {
return palavras.filter(palavra => palavra.includes(inicio))
}
