// 14. Manipulando Objetos Complexos
// Objetivo: Crie um objeto empresa com uma propriedade departamentos, que é um array de objetos. Cada departamento tem um nome e uma lista de funcionarios. Use for in e for of para iterar sobre os departamentos e seus funcionários, exibindo o nome de cada funcionário junto com o departamento ao qual pertence.

let empresa = {
    departamentos: [
        {
            nome: 'TI',
            funcionarios: ['Carlos', 'Giovana', 'José']
        },
        {
            nome: 'RH',
            funcionarios: ['Pedro', 'Helena', 'Carla']
        },
        {
            nome: 'Comercial',
            funcionarios: ['Marcos', 'Marta', 'Lucas']
        },
        { 
            nome: 'Financeiro',
            funcionarios: ['Fernanda', 'Paulo', 'Luiza']
        }
    ]
}

for (let prop in empresa) {
    if (prop === 'departamentos') {
        for (let departamento of empresa[prop]) {
            console.log("Departamento: ", departamento.nome);
            for (let funcionario of departamento.funcionarios) {
                console.log("Funcionário: ", funcionario);
            }
        }
    }
}
