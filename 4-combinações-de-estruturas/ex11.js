// 11. Agrupando Elementos com forEach
// Objetivo: Crie um array de objetos pedidos, onde cada pedido tem cliente, produto, e quantidade. Use forEach para criar um objeto que agrupa a quantidade total de produtos por cliente.

let pedidos = [
    {
        cliente: 'Jonas',
        produto: 'skate',
        quantidade: 2,
    },

    {
        cliente: 'Joana',
        produto: 'patins',
        quantidade: 1,
    },

    {
        cliente: 'Jonas',
        produto: 'patins',
        quantidade: 1,
    },

    {
        cliente: 'Maria',
        produto: 'skate',
        quantidade: 3,
    },

    {
        cliente: 'Maria',
        produto: 'bicicleta',
        quantidade: 3,
    }
]

let agrupado = {}

pedidos.forEach(pedido => { 
    if (agrupado[pedido.cliente] === undefined) {
        agrupado[pedido.cliente] = 0
    }
    agrupado[pedido.cliente] += pedido.quantidade
})

console.log(agrupado)
