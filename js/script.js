let average;

function averageCalc (notas) {

    let sum = 0;

    for( c = 0; c < notas.length; c++) {
        sum += notas[c];
    }

    average = sum / notas.length;

    return average;
}

function approving (notas) {

    let average = averageCalc( notas );

    let condicao = average >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + average + ' - Resultado: ' + condicao;

}

// Recursivas

/*function contagemRegressiva(n) {

    console.log(n);

    let proximoNumero = n - 1;

    while (proximoNumero > 0) {
        contagemRegressiva(proximoNumero);
        break;
    }
}
*/

/*
    Formulario para calculo da media
*/
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function(evento) {

    evento.preventDefault();
    evento.stopPropagation();

    if (this.getAttribute('class').match(/erro/)) {
        return false;
    }

    let dados = new FormData(this);

    let notas = [];

        for(let key of dados.keys()) {

            let number = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0;

            console.log(typeof number);

            if(!isNaN(number)){
                notas.push(number);
            }
        }

        console.log(notas);

        text = approving(notas);

        document.getElementById('resultado').innerHTML = text;

    });

let textBoxes = document.querySelectorAll('input.obrigatorio');

function boxValidate (elemento) {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == "") {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vemelho.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro')
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
    })
}

let numberBoxes = document.querySelectorAll('input.numero');

function boxNumberValidate (elemento) {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/)){
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;
        }
    })
}

let emailBoxes = document.querySelectorAll('input.email');

function boxEmailValidate (elemento) {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const validEmail = /^[a-z0-9.]+@[a-z0-9.]+\.[a-z]/i;

        if(this.value.match(validEmail) ) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vemelho.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    })

}

let ufBoxes = document.querySelectorAll('input.uf');

function boxUfValidate (elemento) {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const validUf = /^[a-z]{2}/i;

        if(this.value.match(validUf) ) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
            return false;
        } else {
            document.querySelector('.mensagem').innerHTML = "Verifique o preenchimento dos campos em vemelho.";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
        }
    })

}

for (let textBox of textBoxes) {
    boxValidate(textBox);
}

for (let numberBox of numberBoxes) {
    boxNumberValidate(numberBox);
}

for (let emailBox of emailBoxes) {
    boxEmailValidate(emailBox);
}

for (let ufBox of ufBoxes) {
    boxUfValidate(ufBox);
}