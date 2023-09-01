const readline = require('readline');
const calculoDesconto = require('./model/calculos.js')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o valor da venda: ', function(valorVenda) {
    entradaDeDados.question('Digite o código da venda? ', function(condicao) {
        const resultado = calculoDesconto.calculadora(valorVenda, condicao)

        if (!isNaN(resultado)) {
            console.log(`O resultado é: ${resultado}`)
        } else {
            console.log('OPS!! ALGO DEU ERRADO')
        }
        entradaDeDados.close()
    })
})