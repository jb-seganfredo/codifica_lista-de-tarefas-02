// 1. Acessando Propriedades de Objetos
// Objetivo: Crie um objeto carro com propriedades como marca, modelo, ano, e cor. Use for in para iterar sobre as e exibir seus valores no console.

let carro = {
    marca: 'Chevrolet',
    modelo: 'Cruze',
    ano: 2019,
    cor: 'preto'
}

for (let prop in carro) {
    console.log(`${prop}: ${carro[prop]}`)
}   

