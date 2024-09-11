// 6. Filtrando Arrays de Objetos
// Objetivo: Crie um array de objetos funcionarios, onde cada objeto contém informações como nome, cargo, e salario. Use for of para filtrar e exibir apenas os funcionários cujo salário seja maior que um valor específico.

let funcionarios = [
    {
        nome: 'Jean Carlos',
        cargo: 'Desenvolvedor',
        salario: 10000
    },
    {
        nome: 'Júlia',
        cargo: 'Designer',
        salario: 8000
    },
    {
        nome: 'Armandinho',
        cargo: 'Cantor',
        salario: 15000
    }
]

function filtrarFuncionarios(arr, valor) {
    let funcionariosFiltrados = []

    for (let funcionario of arr) {
        if (funcionario.salario > valor) {
            funcionariosFiltrados.push(funcionario)
        }
    }

    return funcionariosFiltrados
}

console.log(filtrarFuncionarios(funcionarios, 10000))

