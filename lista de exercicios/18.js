/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas*/

// Resolução 1
function despesasTotais(itens) {
var total = 0
for (let item of itens)
total += item.preco
return total
}

// Resolução 2
function despesasTotais(itens) {
return itens
.map(item => item.preco)
.reduce((acumulador, valorAtual) => acumulador + valorAtual)
}

// Resolução 3
function despesasTotais(itens) {
return itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
}