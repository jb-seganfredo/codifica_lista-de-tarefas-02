// 12. Atualizando um Array de Objetos
// Objetivo: Crie um array de objetos estoque, onde cada objeto tem produto, quantidade e minimo. Use forEach para atualizar a quantidade dos produtos que estão abaixo do mínimo, duplicando suas quantidades

let estoque = [
    {
        produto: 'livro',
        quantidade: 10,
        minimo: 5
    },
    {
        produto: 'caderno',
        quantidade: 1,
        minimo: 3
    },
    {
        produto: 'caneta',
        quantidade: 7,
        minimo: 4
    }
]

estoque.forEach(produto => {
    for (let i = 0; i < estoque.length; i++) {
        if (produto.quantidade < produto.minimo) {
            produto.quantidade *= 2
        }
    }
    
})

console.log(estoque)