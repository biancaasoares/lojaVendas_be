function calculadora(valor, condicao) {
    let resultadoFinal;

    valor = Number(valor)

    switch (condicao) {
        case "1":
            resultadoFinal = valor - (valor * (8 / 100));
            console.log('Haverá  um desconto de 8%, a partir de agora o valor é ' + resultadoFinal);
            break;
        case "2":
            resultadoFinal = valor - (valor * (4 / 100));
            console.log('Haverá um desconto de 4%, a partir de agora o valor é ' + resultadoFinal);
            break;
        case "3":
            resultadoFinal = valor / 2;
            console.log('O valor será parcelado em 2x, cada parcela será de ' + resultadoFinal);
            break;
        case "4":
            resultadoFinal = valor + (valor * (8 / 100));
            let parcela = resultadoFinal / 4;
            console.log('Com a parcela em 4x será acrescentado 8% de juros, o valor total é ' + resultadoFinal + '\n  e com cada parcela passará a ser de ' + parcela);
            break;
        default:
            console.log(' Códigos:\n Código 1 - À vista, com 8% de desconto\n Código 2 - À vista, com 4% de desconto\n Código 3 - Parcela em 2x, preço sem juros\n Código 4 - Em 4x, preço com acréscimo de 8%');
            break;
    }

    return resultadoFinal !== undefined ? resultadoFinal : false;
}

module.exports = {
    calculadora
};