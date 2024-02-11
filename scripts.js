
function desafio_1() {

    alert('desafio 1 vai ser iniciado!');
    let diaDaSemana = prompt('QUAL DIA DA SEMANA VOCÊ ESTÁ?');
    console.log(diaDaSemana)

    if (diaDaSemana === 'domingo' || 'sabado') {
        alert('BOM FIM DE SEMANA!')
        console.log(diaDaSemana === 'domingo' || 'sabado')
    } else {
        alert('BOA SEMANA!')
    }


    // RESPOSTA DO PROFESSSOR: 
    //  diaDaSemana = prompt('Qual é o dia da semana?');
    //  if (diaDaSemana == 'Sábado') {
    //   alert('Bom fim de semana!');
    //}  else if (diaDaSemana == 'Domingo') {
    //    alert('Bom fim de semana!');
    //}    else {
    //    alert('Boa semana!');
    //}
};

function desafio_2() {

    alert('VAI INICIAR O DESAFIO 2');
    alert('IREI FALAR SE SEU NÚMERO É POSITVO OU NEGATIVO ..');
    let numeroDigitado = prompt('DIGITE UM NÚMERO "POSITIVO" OU "NEGATIVO" ...');

    if (numeroDigitado > 0) {
        alert('SEU NÚMERO É POSITVO!!!')
    }

    if (numeroDigitado < 0) {
        alert('SEU NÚMERO É NEGATIVO !!!!')
    }

    //  RESPOSTA DO PROFESSOR:
    //  numero = prompt('Digite um positivo ou negativo');
    //  if (numero > 0) {
    //   alert('Número positivo!');
    //  } else {
    //   alert('Número negativo!');
    //  }
};

function desafio_3() {

    alert('VAI INICIAR O DESAFIO 3');
    alert('FALE UM NÚMERO DE 1 A 1000 !!!!');
    let score = prompt('O NÚMERO QUE VOCÊ FALOU É A QUANTIDADE DE PONTOS QUE VOCÊ FEZ NO JOGO! QUAL NÚMERO QUE VOCÊ FALOU? ');

    if (score >= 100) {
        alert('Parabéns, você venceu!');

    } else {
        alert('Tente novamente para ganhar.');
    }

    //  RESOLUÇÃO DO PROFESSOR:
    //  pontuacao = 105;
    //  if (pontuacao >= 100) {
    //    console.log('Parabéns, você venceu!');
    // } else {
    //  .log('Tente novamente para ganhar.');
    //  }
};

function desafio_4() {

    alert('VAI INICIAR O DESAFIO 4');
    let saldo = prompt('QUANTO VOCÊ TEM NA CONTA ??')
    alert(` SEU SALDO NA CONTA É DE ${saldo} REAIS.`)


    //  RESOLUÇÃO PROFESSOR:
    //  let saldoConta = 500; // Exemplo de saldo
    //  alert(`Seu saldo é de R$${saldoConta}.`);

};

function desafio_5() {

    let nome = prompt('QUAL SEU NOME?')
    alert(`OLÁ ${nome}! SEJA BEM VINDO  AO DESAFIO 5`);
};