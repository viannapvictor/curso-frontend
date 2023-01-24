function averageCalc ( notas ) {

    let soma = 0;

    for( c = 0; c < notas.lenght; c++) {
        soma += notas[c];
    }

    average = soma / notas.lenght;

    return average;
}

let media;

function approving (notas) {

    let average = averageCalc(notas);

    let condition = average >= 8 ? "aprovado" : "reprovado"

    return 'Média: ' + average + ' - Resultado: ' + condition

}

// Recursivas

function contagemRegressiva(n) {

    console.log(n);

    let proximoNumero = n - 1

    while (proximoNumero > 0) {
        contagemRegressiva(proximoNumero);
        break;
    }
}


document.addEventListener('submit', function(evento) {

   evento.preventDefault();
   evento.stopPropagation();

   let meuFormulario = document.getElementById('formulario-01');

   let dados = new FormData(meuFormulario);

   let objeto = {};

   let notas = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        notas.push(parseInt(dados.get(key)));
    }

    console.log(notas)

    console.log(objeto);

    text = approving(notas);

    document.getElementById('resultado').innerHTML = text;

});