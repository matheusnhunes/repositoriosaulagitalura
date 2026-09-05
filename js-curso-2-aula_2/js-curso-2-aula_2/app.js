let listaDeNumerosSorteados = [];
let quantidadeDeNumerosSorteados = 10;
let numeroSecreto;
let tentativas;
reiniciarJogo();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativa);
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();

    }

}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeDeNumerosSorteados + 1);
    let quantidadeDeElementorNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementorNaLista == quantidadeDeNumerosSorteados){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    chute.focus();
}

function reiniciarJogo() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
    tentativas = 1;
}