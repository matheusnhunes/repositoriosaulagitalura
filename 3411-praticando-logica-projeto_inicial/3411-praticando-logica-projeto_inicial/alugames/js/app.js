let quantidadeAlugados = 0;
let totalAlugados = 0;
let totalDevolvidos = 0;

function alterarStatus(itemId) {
    // coleta no HTML o primeiro item que contenha o ID 'game-x'
    let gameClicado = document.getElementById(`game-${itemId}`);
    console.log(`gameClicado:`);
    console.log(gameClicado);

    // coleta no HTML o primeiro item que contenha a classe 'dashboard__item__img', é definido como classe o ' . ' antes do texto
    let imagemClicado = gameClicado.querySelector('.dashboard__item__img');
    console.log(`imagemClicado:`);
    console.log(imagemClicado);

    let botaoClicado = gameClicado.querySelector('.dashboard__item__button');
    console.log(`botaoClicado:`);
    console.log(botaoClicado);

    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');
    console.log(`nomeJogo: ${nomeJogo.textContent}`);

    // mostrando as classes de imagemClicado
    console.log('Class List de imagemClicado:');
    console.log(imagemClicado.classList);

    // mostrando as classes de botaoClicado
    console.log('Class List de botaoClicado:');
    console.log(botaoClicado.classList);


    // utilizar o classList para manobrar as informações do HTML
    if (imagemClicado.classList.contains('dashboard__item__img--rented')) {
        devolver();
    } else {
        alugar();
    }

    function devolver() {
        let confirmaDevolver = prompt('Digite 1 para confirmar a devolução:');
        if (confirmaDevolver == 1) {
            imagemClicado.classList.remove('dashboard__item__img--rented');
            botaoClicado.classList.remove('dashboard__item__button--return');
            botaoClicado.textContent = 'Alugar';
            quantidadeAlugados--;
            totalDevolvidos++;
            consoleAlugados();

        } else {
            alert('O usuário optou por cancelar a devolução.');
        }

    }

    function alugar() {
        imagemClicado.classList.add('dashboard__item__img--rented');
        botaoClicado.classList.add('dashboard__item__button--return');
        botaoClicado.textContent = 'Devolver';
        quantidadeAlugados++;
        totalAlugados++;
        consoleAlugados();
    }

}

function consoleAlugados() {
        console.log(`Total de itens alugados é de ${quantidadeAlugados}, historicamente estamos com ${totalAlugados} alugados e ${totalDevolvidos} devolvidos.`)
}


/*
// Crie um programa que verifica se uma palavra ou frase é um palíndromo.
let fraseDigitada = prompt('Digite uma frase para verificar se é um palíndromo:');
console.log(ehPalindromo(fraseDigitada));
//Socorram-me, subi no onibus em marrocos!


function ehPalindromo(frase) {
  // Remove espaços, acentos e pontuações usando Regex
  const limpaFrase = frase
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

  // Inverte a frase limpa
  const fraseInvertida = limpaFrase.split('').reverse().join('');

  // Compara as duas strings
  return limpaFrase === fraseInvertida;
}
*/

/*
// Crie um programa com uma função que receba três números como argumentos e os retorne em ordem crescente. Exiba os números ordenados.
let numArray = [prompt('Digite o primeiro número para ordenar:'), prompt('Digite o segundo número para ordenar:'), prompt('Digite o terceiro número para ordenar:')];
// ordenado pela função
console.log(ordenarNumeros(numArray[0], numArray[1], numArray[2]));
// ordenado pelo array
console.log(numArray);

function ordenarNumeros(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}
*/
