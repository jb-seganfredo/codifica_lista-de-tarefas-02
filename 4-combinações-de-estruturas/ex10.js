// 10. Criando Relatórios com Objetos e Arrays
// objetivo: Crie um array de objetos vendas, onde cada objeto tem produto, quantidade e valor. Use forEach para calcular o valor total de vendas de todos os produtos.

let vendas = [
    {
        produto: 'kindle',
        quantidade: 10,
        valor: 1000
    },
    {
        produto: 'notebook',
        quantidade: 5,
        valor: 3000
    },
    {
        produto: 'rádio',
        quantidade: 7,
        valor: 1500
    }
]

let total = 0

vendas.forEach(venda => {
    total += venda.quantidade * venda.valor
})

console.log(`O valor total de vendas é R$${total}`)
