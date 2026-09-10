// sortear 'quantidade' de 'deNumero' ate 'ateNumero'
// enquanto 'numeroSorteado.lenght' < 'quantidade' = sortear

function exibirTextoNaTelaPorId(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function sortear() {
    quantidade = parseInt(document.getElementById("quantidade").value);
    deNumero = parseInt(document.getElementById("de").value);
    ateNumero = parseInt(document.getElementById("ate").value);
    let sorteador = 0;
    let numeroSorteado = [];
    let rangeSorteio = ateNumero - deNumero + 1;

    if (quantidade > rangeSorteio || deNumero < 1 || ateNumero < 1) {
        alert(`Você solicitou ${quantidade} porém a quantidade disponível é de ${rangeSorteio}, ajuste os campos para tornar possível.`)
    } else {

        console.log(`O lenght do numeroSorteado é de ${numeroSorteado.length}.`)
        console.log(`Quantidade: ${quantidade}.`);
        console.log(`deNumero: ${deNumero}.`);
        console.log(`ateNumero: ${ateNumero}.`);
        console.log(`rangeSorteio: ${rangeSorteio}.`);


        while (numeroSorteado.length < quantidade) {
            // função Math.floor pesquisada em aula, em uma lógica que garante que o número gerado esteja entre o intervalo
            //  acaba inibndo o meu else if logo abaixo mas resolvi deixar para entender a evolução
            sorteador = parseInt(Math.floor(Math.random() * (ateNumero - deNumero)) + deNumero);
            // garante que o número sorteado seja único
            if (numeroSorteado.includes(sorteador) == true) {
                console.log(`O número sorteado ${sorteador} já foi sorteado, sorteando novamente.`);

            }
            // garante que o número sorteado seja maior ou igual ao deNumero
            else if (sorteador < deNumero) {
                console.log(`sorteador gerou ${sorteador}, é menor que deNumero ${deNumero}, sorteando novamente.`)

            }
            // adiciona o número sorteado no array e exibe o número no console
            else {
                numeroSorteado.push(sorteador);
                console.log(`O número sorteado foi de ${sorteador}.`);

            }

        }

        console.log('Encerrou os números sorteados.');
        console.log(numeroSorteado);

        let fraseResultados = numeroSorteado.length > 1 ? 'Os números sorteados foram: ' : 'O número sorteado foi:';

        exibirTextoNaTelaPorId('resultado', `${fraseResultados}${numeroSorteado}.`);
        document.getElementById('btn-reiniciar').className = 'container__botao';
        document.getElementById('btn-reiniciar').toggleAttribute('disabled');
        document.getElementById('btn-sortear').className = 'container__botao-desabilitado';
        document.getElementById('btn-sortear').toggleAttribute('disabled');
        return numeroSorteado;
    }

}

function limparCampo() {
    quantidade = document.getElementById("quantidade").value = '';
    deNumero = document.getElementById("de").value = '';
    ateNumero = document.getElementById("ate").value = '';
}

function reiniciarJogo() {
    console.log('Reiniciando o jogo...');
    exibirTextoNaTelaPorId('resultado', 'Números sorteados:  nenhum até agora');
    limparCampo();

    // altera a classe dos botões e inverte o atributo 'desativado' de cada um, poderia ser uma função
    document.getElementById('btn-reiniciar').className = 'container__botao-desabilitado'
    document.getElementById('btn-reiniciar').toggleAttribute('disabled');
    document.getElementById('btn-sortear').className = 'container__botao';
    document.getElementById('btn-sortear').toggleAttribute('disabled');
    document.getElementById('quantidade').focus();
}