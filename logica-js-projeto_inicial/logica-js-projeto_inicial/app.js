// Matheus Nunes > Lógica de programação: mergulhe em programação com JavaScript



// jogo do número secreto
alert('Boas vindas ao jogo do número secreto!');
let tetoSecreto = prompt('Digite o teto do número secreto:'); // define o teto do número secreto
// parseInt para pegar apenas a parte inteira do número gerado pelo Math.random(), que gera um número aleatório entre 0 e 1, multiplicado por 10 e somado 1 para gerar um número entre 1 e 10
let numeroSecreto = parseInt(Math.random() * tetoSecreto + 1); // gera um número aleatório entre 1 e o teto
console.log(`O número secreto é ${numeroSecreto}`);
let numeroChute;
let tentativas = 1;

while(numeroChute != numeroSecreto){
    
    numeroChute = prompt(`Digite um número entre 0 e ${tetoSecreto}:`);

// se a pessoa acertar o número secreto
    if(numeroSecreto == numeroChute) {
        break;
    } else{
        if(numeroSecreto > numeroChute){
            alert(`O número secreto é maior que ${numeroChute}!`);
        } else{
            alert(`O número secreto é menor que ${numeroChute}`);
        }
        // tentativas = tentativas + 1; é a forma mais longa de incrementar 1
        tentativas++;

    }
}

// operador ternário para definir a palavra chute ou chutes, faz a mesma coisa que o if/else comentado abaixo, mas de forma mais enxuta
let palavraChute = tentativas == 1 ? 'chute' : 'chutes';
alert (`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraChute}!`);

/*
if(tentativas > 1){
        alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} chutes!`);
}   else{
            alert(`Isso aí, você descobriu o número secreto ${numeroSecreto} com ${tentativas} chute!`);

}*/

/*

// digita o dia da semana e recebe mensagem de final de semana ou boa semana
let diaDaSemana = prompt('Digita o dia da semana (1 a 7):');

if(diaDaSemana == 1){
    alert('Bom final de semana!');
} else if(diaDaSemana == 7){
    alert('Bom final de semana!');
} else{
    alert('Boa semana!'); 
}

// digita um número e recebe mensagem se é positivo, negativo ou neutro
alert('Vamos descobrir se o número digitado é positivo, negativo ou neutro!');
   
let numeroDigitado = prompt('Digite um número inteiro:');    
    if(numeroDigitado > 0){
    alert(`O número ${numeroDigitado} é positivo!`);
} 
    else if(numeroDigitado < 0){
    alert(`O número ${numeroDigitado} é negativo!`);
} 
    else if(numeroDigitado == 0){
    alert(`O número ${numeroDigitado} é neutro ou vazio!`);
}

alert ('Você saiu do programa!');

// digita a quantidade de pontos e recebe mensagem de vitória ou tentar novamente
let pontos = prompt('Digite a quantidade de pontos:');

if(pontos >= 100){
    alert('Parabéns! Você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

// digita o saldo da conta e recebe em texto
let saldo = prompt('Digite o saldo da sua conta:');

alert(`O saldo da sua conta é R$ ${saldo}`);

// digita o nome e recebe saudação
let nomeSaudacao = prompt('Digite o seu nome:');

alert(`Olá ${nomeSaudacao}, seja bem-vindo(a)!`);

// conta do 1 até o 10
let contador = 1;
while(contador <= 10){
    console.log(`O contador está em ${contador}`);
    contador++;
}

// conta do 10 até o zero
contador = 10;
while(contador > -1){
    console.log(`O contador está em ${contador}`);
    contador--;
}

// conta do zero até o número digitado
let contadorDigitado = prompt('Digite um número inteiro positivo para o contador regressivo:');

while(contadorDigitado > 0){
    console.log(`O contador digitado regressivo está em ${contadorDigitado}`);
    contadorDigitado--;
}


// conta do numero digitado até o zero
contadorDigitadoProgressivo = prompt('Digite um número inteiro positivo para o contador progressivo:');
contadorZero = 0;

while(contadorDigitadoProgressivo >= contadorZero){
    console.log(`O contador digitado progressivo está em ${contadorZero}`);
    contadorZero++;
}

// utilizando console.log para exibir mensagem de boas vindas no console do navegador
console.log('Boas vindas');

// utilizando prompt para digitar um nome para os próximos exercícios
let nome = prompt('Digite o seu nome:');

// utilizando console.log para exibir mensagem de boas vindas no console do navegador com o nome digitado
console.log(`Olá ${nome}, seja bem-vindo(a)!`);

// utilizando alert para exibir mensagem de boas vindas no navegador com o nome digitado
alert(`Olá ${nome}, seja bem-vindo(a)!`);

// utilizando prompt para digitar a linguagem de programação favorita e depois exibindo no console do navegador
let linguagemGosta = prompt('Qual linguagem de programação você gosta mais?');
console.log(`Você gosta de ${linguagemGosta}!`);

// utilizando prompt para digitar dois valores e depois exibindo o resultado da soma no console do navegador
let valorUm = prompt('Digite o primeiro valor:');
let valorDois = prompt('Digite o segundo valor:');
let valorResultado = valorUm - valorDois;
console.log(`O resultado da subtração é: ${valorResultado}`);

// utilizando prompt para digitar a idade e depois exibindo no console do navegador se é maior ou menor de idade
let idade = prompt('Digite a sua idade:');
if(idade >= 18){
    console.log('Você é maior de idade!');
} else {
    console.log('Você não é maior de idade!');
}

// utilizando prompt para digitar um número inteiro e depois exibindo no console do navegador se é positivo, negativo ou neutro
let numeroPoNeZe = prompt('Digite um número inteiro:');
if( numeroPoNeZe > 0){
    console.log(`O número ${numeroPoNeZe} é positivo!`);
} else if( numeroPoNeZe < 0){
    console.log(`O número ${numeroPoNeZe} é negativo!`);
} else {
    console.log(`O número ${numeroPoNeZe} é zero!`);
}

// utilizando um loop para exibir o número de 1 a 10 no console do navegador
let numeroWhileUntil10 = 1;
while(numeroWhileUntil10 <= 10){
    console.log(`O número do while é: ${numeroWhileUntil10}`);
    numeroWhileUntil10++;
}

// utilizando prompt para digitar a nota escolar e depois exibindo no console do navegador se foi aprovado ou reprovado
let notaEscolar = prompt('Digite a sua nota escolar:');
if(notaEscolar >= 7){
    console.log(`Parabéns! Você foi aprovado com a nota ${notaEscolar}!`);
} else {
    console.log(`Você foi reprovado com a nota ${notaEscolar}.`);
}

// usando Math.random() para gerar um número aleatório entre 0 e 1
alert(Math.random());

// gera um número aleatório entre 1 e 10
alert(parseInt(Math.random() * 10 + 1)); 

// gera um número aleatório entre 1 e 1000
alert(parseInt(Math.random() * 1000 + 1));

*/