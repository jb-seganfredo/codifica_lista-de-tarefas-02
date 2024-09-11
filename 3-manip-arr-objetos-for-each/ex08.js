// 8. Criando Novos Arrays a Partir de Objetos
// Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo, diretor, e anoLancamento. Use forEach para criar um novo array contendo apenas os títulos dos filmes.

let filmes = [  
    {
        titulo: 'O Poderoso Chefão',
        diretor: 'Francis Ford Coppola',
        anoLancamento: 1972
    },
    {
        titulo: 'O Senhor dos Anéis',
        diretor: 'Peter Jackson',
        anoLancamento: 2001
    },
    {
        titulo: 'Interestelar',
        diretor: 'Christopher Nolan',
        anoLancamento: 2014
    } 
]

let titulos = []

filmes.forEach(filme => {
    titulos.push(filme.titulo)
}
)

console.log("O novo array com apenas os títulos é: ", titulos)