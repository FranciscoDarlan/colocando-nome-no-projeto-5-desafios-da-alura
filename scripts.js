
function desafio_1(){
    let diasDasemana = [ 'segunda', 'terça', 'quarta', 'quinta', 'sexta'];
    let diasFinaisSemana = [ 'sabado', 'domingo'];
    console.log(diasDasemana)
    console.log(diasFinaisSemana)

    alert('desafio 1 vai ser iniciado!');
   let diaDaSemana = prompt('QUAL DIA DA SEMANA VOCÊ ESTÁ?');
    console.log(diaDaSemana)

   if (diaDaSemana === 'domingo'||'sabado'){
        alert('BOM FIM DE SEMANA!')
        console.log(diaDaSemana === 'domingo'||'sabado')
   } else{
    alert('BOA SEMANA!')
   }
};

function desafio_2(){
    
    alert('VAI INICIAR O DESAFIO 2');
    alert('IREI FALAR SE SEU NÚMERO É POSITVO OU NEGATIVO ..');
    let numeroDigitado = prompt('DIGITE UM NÚMERO "POSITIVO" OU "NEGATIVO" ...');

    if ( numeroDigitado > 0) {
        alert('SEU NÚMERO É POSITVO!!!')
    }

    if (numeroDigitado < 0) {
        alert('SEU NÚMERO É NEGATIVO !!!!')
    }
};

function desafio_3(){
    
    alert('VAI INICIAR O DESAFIO 3');
    alert('FALE UM NÚMERO DE 1 A 1000 !!!!');
    let score = prompt('O NÚMERO QUE VOCÊ FALOU É A QUANTIDADE DE PONTOS QUE VOCÊ FEZ NO JOGO! QUAL NÚMERO QUE VOCÊ FALOU? ');

    if (score >= 100) {
        alert('Parabéns, você venceu!');

    }else{
        alert('Tente novamente para ganhar.');
    }
};

function desafio_4(){
    
    alert('VAI INICIAR O DESAFIO 4');
    let saldo = prompt('QUANTO VOCÊ TEM NA CONTA ??')
    alert(` SEU SALDO NA CONTA É DE ${saldo} REAIS.`)
};

function desafio_5(){
    
    let nome = prompt('QUAL SEU NOME?')
    alert(`OLÁ ${nome}! SEJA BEM VINDO  AO DESAFIO 5`);
};