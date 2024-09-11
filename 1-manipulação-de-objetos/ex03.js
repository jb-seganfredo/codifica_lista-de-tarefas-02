// 3. Filtrando Propriedades de Objetos
// Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. Use for in para filtrar as propriedades.

let produto = {
    nome: 'Smartphone',
    preco: 1000,
    cor: 'Preto',
    estoque: 10
}

function filtrarPropriedades(obj, valor) {
    let novoObj = {}

    for (let prop in obj) {
        if (obj[prop] > valor) {
            novoObj[prop] = obj[prop]
        }
    }

    return novoObj
}

console.log(filtrarPropriedades(produto, 500)) 