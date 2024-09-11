// 9. Contabilizando Elementos com uma Condição
// Objetivo: Crie um array de objetos clientes, cada um com propriedades nome, idade, e cidade. Use forEach para contar quantos clientes têm mais de 30 anos.

let clientes = [
    {
        nome: 'Jean Carlos',
        idade: 27,
        cidade: 'Rancho Queimado'
    },
    {
        nome: 'Júlia',
        idade: 22,
        cidade: 'Torres'
    },
    {
        nome: 'Armandinho',
        idade: 35,
        cidade: 'Porto Alegre'
    }
]

let contagem = 0

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contagem++
    }
})

console.log("O número de clientes com idade superior a 30 anos é: ", contagem)
