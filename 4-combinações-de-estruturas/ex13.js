// 13. Implementando um Carrinho de Compras
// Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um array de objetos. Cada objeto dentro de itens deve representar um produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach para calcular o valor total do carrinho.

let carrinho = {
    itens: [
        {
            nome: 'livro',
            quantidade: 2,
            precoUnitario: 20
        },
        {
            nome: 'caderno',
            quantidade: 3,
            precoUnitario: 10
        },
        {
            nome: 'caneta',
            quantidade: 4,
            precoUnitario: 5
        }
    ]
}

let total = 0

carrinho.itens.forEach(produto => {
    total += produto.quantidade * produto.precoUnitario
})

console.log("O valor total do carrinho é: ", total) 