// 2. Verificando Propriedades
// Objetivo: Crie um objeto livro com propriedades titulo, autor, anoPublicacao e genero. Verifique se a propriedade editora existe no objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let livro = {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    anoPublicacao: 1954,
    genero: 'Fantasia'
}

let editoraExiste = false

for (let prop in livro) {
    if (prop === 'editora') {
        editoraExiste = true
    }
}

if (!editoraExiste) {
    livro.editora = 'HarperCollins'
}

console.log(livro)

    