// 7. Modificando Objetos em um Array
// Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome, preco, e desconto. Use forEach para aplicar um desconto de 10% em todos os produtos e exibir o novo preço.


let produtos = [
    {
        nome: 'kindle',
        preco: 1000,
        desconto: 10
    },
    {
        nome: 'notebook',
        preco: 3000,
        desconto: 5
    },
    {
        nome: 'tablet',
        preco: 1500,
        desconto: 7
    }
]

produtos.forEach(produto => {
    produto.preco -= produto.preco * (produto.desconto / 100)
})

console.log(produtos)