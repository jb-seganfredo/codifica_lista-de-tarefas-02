// 4. Iterando Sobre Arrays de Objetos
// Objetivo: Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome, idade, e cidade. Use for of para exibir as informações de cada pessoa no console.

let pessoas = [
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
        idade: 30,
        cidade: 'Porto Alegre'
    }
]

for (let pessoa of pessoas) {
    console.log(pessoa)
}

