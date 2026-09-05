/*

// Desafio Funções
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio!";

function Console() {
    console.log('O botão console foi clicado!');
}

function Alert() {
    alert('Eu amo JS');
}

function Prompt() {
    let cidade = prompt('Qual cidade do Brasil você esteve?');
    alert (`Você esteve em ${cidade}`);
}

function Soma() {
    alert('Vamos somar dois números!');
    let num1 = prompt('Digite o primeiro número:');
    let num2 = prompt('Digite o segundo número:');
    let resultado = parseInt(num1) + parseInt(num2);
    alert (`O resultado da soma é: ${resultado}`);
}


alert('Bora soltar a resolutiva dos desafios OITO utilizando funções:');

alert('Desafio 8.1: "Criar uma função que exibe "Olá, mundo!" no console."');
oitoUm();

alert('Desafio 8.2: "Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console."');
oitoDois(prompt('Digite seu nome:'));

let numDobro;
alert('Desafio 8.3: "Criar uma função que recebe um número como parâmetro e retorna o dobro desse número."');
oitoTres(numDobro = prompt('Digite um número para dobrar:'));

let num1;
let num2;
let num3;
alert('Desafio 8.4: "Criar uma função que recebe três números como parâmetros e retorna a média deles."');
oitoQuatro(num1 = prompt('Digite o primeiro número:'), num2 = prompt('Digite o segundo número:'), num3 = prompt('Digite o terceiro número:'));

alert('Desafio 8.5: "Criar uma função que recebe dois números como parâmetros e retorna o maior deles."');
oitoCinco(num1 = prompt('Digite o primeiro número:'), num2 = prompt('Digite o segundo número:'));

let numMesmo;
alert('Desafio 8.6: "Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo."');
oitoSeis(numMesmo = prompt('Digite um número para elevar ao quadrado:'));



function oitoUm() {
    console.log('Olá, mundo!');
}

function oitoDois(nomeDigitado) {
    console.log(`Olá, ${nomeDigitado}!`);
}

function oitoTres(numDobro) {
    let dobro = numDobro * 2;
    console.log(dobro);
    return dobro;
}

function oitoQuatro(num1, num2, num3) {
    let mediaTres = (num1 + num2 + num3) / 3
    console.log(mediaTres);
    return mediaTres;
}

function oitoCinco(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
        return num1;
    } else {
        console.log(num2);
        return num2;
    }
}

let eleMesmo;
function oitoSeis(numMesmo) {
    let eleMesmo = numMesmo * numMesmo;
    console.log(eleMesmo);
    return eleMesmo;
}

*/

function parseVirgulaPonto(palavraParse) {
    let palavraParseada = parseFloat(palavraParse.replace(',', '.'));
    return palavraParseada;
}


/*
// Desafio Reiniciando o Jogo


alert('7.1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.');

// imc = altura / peso²
function seteUm(altura, peso){
    let alturaPonto = parseVirgulaPonto(altura);
    let pesoPonto = parseVirgulaPonto(peso);
    let imc = pesoPonto / (alturaPonto ** 2);
    console.log(`Altura: ${altura} / ${alturaPonto} Peso: ${peso} / ${pesoPonto}`);
    console.log(`O IMC calculado é: ${imc}`);
    return imc;
}

// pesquisei e descobri o parseFloat para tratar se a pessoa digitar o peso com virgula ou não, acabei replicando pra formula.
seteUm(altura = prompt ('Digite sua altura em metros (ex: 1,86):'), peso = prompt ('Digite seu peso em quilogramas (ex: 95):'));


alert('7.2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.');

// pesquisei e utilizei algo conhecido como Fluxo da Recursão (A Empilhadeira), basicamente a função chama ela mesma até que o valor chegue em 1

//Quando você chama valorFatorar(4), o JavaScript não consegue resolver a conta de imediato porque ele depende do resultado de valorFatorar(3).
//Então, o navegador cria uma pilha de execução (Call Stack) guardando cada etapa na memória:
//valorFatorar(4) entra na pilha
//Espera o resultado de 4 * valorFatorar(3)
//valorFatorar(3) entra na pilha
//Espera o resultado de 3 * valorFatorar(2)
//valorFatorar(2) entra na pilha
//Espera o resultado de 2 * valorFatorar(1)
//valorFatorar(1) entra na pilha
//Caso Base atingido! Ela retorna diretamente o valor 1.

function seteDois(valorFatorar) {
    if(valorFatorar === 0 || valorFatorar === 1){
        return 1;
    } else{
        return valorFatorar * seteDois(valorFatorar - 1);
    }
}
//
alert(seteDois(valorFatorar = prompt('Digite o valor que deseja fatorar:')));



alert('7.3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.');

let cotacaoDolar = 4.80;
function seteTres(valorReal) {
    return parseVirgulaPonto(valorReal) * cotacaoDolar;
}

alert(seteTres(prompt(`Digite um valor em real que deseja cotar em dólar, levando como base a cotação de USD 1,00 para BRL ${cotacaoDolar}:`)));



alert('7.4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.');

// área = base x altura
// perímetro = base + base + altura + altura

function seteQuatro(base, altura){
    let areaCalculada = parseVirgulaPonto(base) * parseVirgulaPonto(altura);
    let perimetroCalculado = base*2 + altura*2;

    return `A área calculada é de ${areaCalculada} e o perímetro é de ${perimetroCalculado}.`;
}
alert(seteQuatro(prompt('Vamos calcular a área e o perímetro de uma estrutura retangular, digite o comprimento da base:'), prompt('Digite a altura da base:')));



alert('7.5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.');

// perimetro = 2 * PI * raio
// perimetro = PI * diametro

function seteCinco(raio){
    let numeroPi = 3.1416;
    let perimetroCinco = 2 * numeroPi * raio;
    let areaCinco = numeroPi * (raio ** 2);

    return `Na sala circular, a área ficou em ${areaCinco} e o perímetro em ${perimetroCinco}`;

}

alert(seteCinco(prompt('Digite o raio:')));



alert('7.6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.');

function seteSeis(numeroTaboada){
    return `A taboada do número ${numeroTaboada}é:\n 
    ${numeroTaboada} x 10 = ${numeroTaboada*10}\n
    ${numeroTaboada} x 9 = ${numeroTaboada*9}\n
    ${numeroTaboada} x 8 = ${numeroTaboada*8}\n
    ${numeroTaboada} x 7 = ${numeroTaboada*7}\n
    ${numeroTaboada} x 6 = ${numeroTaboada*6}\n
    ${numeroTaboada} x 5 = ${numeroTaboada*5}\n
    ${numeroTaboada} x 4 = ${numeroTaboada*4}\n
    ${numeroTaboada} x 3 = ${numeroTaboada*3}\n
    ${numeroTaboada} x 2 = ${numeroTaboada*2}\n
    ${numeroTaboada} x 1 = ${numeroTaboada*1}\n`
}

alert(seteSeis(prompt('Digite o número que deseja receber a taboada:')));

// aqui estava pesquisando em como fazer de outra forma, parei em cons e verifiquei se eu sei utilizar (eu acho que a próxima aula explica mais isso!)

// 1. Criamos a nossa pilha (empilhadeira)
const pilhaTabuada = [];
const numero = prompt('Digite o número que deseja receber a taboada:');

// 2. Empilhando os valores (Push)
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    // Armazenamos um texto formatado na pilha
    pilhaTabuada.push(`${numero} x ${i} = ${resultado}`);
}

console.log("--- Pilha cheia! Agora vamos desempilhar ---");

// 3. Desempilhando os valores (Pop)
// Como é uma pilha, o último inserido (7 x 10) será o primeiro a sair!
while (pilhaTabuada.length > 0) {
    let linha = pilhaTabuada.pop();
    console.log(linha);
}
*/


// Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

// Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(linguagensDeProgramacao);
console.log('Adicionando alguns itens á lista:')

// Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

// Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let listaTresNomes = ['Matheus', 'Janaína', 'Layla e Solano'];

console.log(listaTresNomes[0]);

// Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(listaTresNomes[1]);
//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(listaTresNomes[listaTresNomes.length-1]);