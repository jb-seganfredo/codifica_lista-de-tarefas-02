// 15. Filtrando e Somando Valores
// Objetivo: Crie um array de objetos transacoes, onde cada transação tem tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final, somando as entradas e subtraindo as saídas.


let transacoes = [
    {
        tipo: 'entrada',
        valor: 200
    },
    {
        tipo: 'saida',
        valor: 50
    },
    {
        tipo: 'entrada',
        valor: 100
    },
    {
        tipo: 'saida',
        valor: 90
    }
]

let saldo = 0

transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
        saldo += transacao.valor
    } else if (transacao.tipo === 'saida') {
        saldo -= transacao.valor
    }
})

console.log("Saldo final: ", saldo)