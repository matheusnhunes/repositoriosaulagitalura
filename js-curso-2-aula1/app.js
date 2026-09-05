let numeroSecreto = gerarNumeroAleatorio();

/*
// edita a mensagem do título
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto!';

// edita a mensagem do parágrafo
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Descubra o número secreto entre 1 e 10!';
*/

// função para exibir na tela, mesma ideia das variáveis acima de titulo e paragrafo, mas fazendo de uma forma mais prática, depois é só chamar as funções e distribuir o texto
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto!');
exibirTextoNaTela('p', 'Descubra o número secreto entre 1 e 10!');

// função para verificar o chute do usuário, por enquanto apenas imprime a mensagem no console
function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log("O usuário chutou: " + chute);
    console.log("O numero secreto é: " + numeroSecreto);
    console.log(numeroSecreto == chute ? "Parabéns, você acertou!" : "Você errou, tente novamente!");
}

// função que gera um número aleatório entre 1 e 10 e retorna quando chamada
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}