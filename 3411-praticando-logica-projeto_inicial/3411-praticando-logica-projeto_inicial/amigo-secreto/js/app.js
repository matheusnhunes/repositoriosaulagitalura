/*
let listaAmigos = [];
let listaSorteados = [];
reiniciar();

function adicionar() {
    let nomeDoAmigo = formatarNomeComConectores(document.getElementById("nome-amigo").value);

    console.log(`Nome do amigo é ${nomeDoAmigo}`);

    if (!listaAmigos.includes(nomeDoAmigo) || nomeDoAmigo === "") {
        listaAmigos.push(nomeDoAmigo);
        console.log("listaAmigos agora: \n" + listaAmigos);
        atualizarAmigos();
        document.getElementById("nome-amigo").value = "";
        document.getElementById("nome-amigo").focus();
    } else {
        console.log("Nome já existente na lista, recomendado adicionar sobrenome.");
        return;
    }
    return;
}

function sortear() {
    if (listaAmigos.length < 2) {
        alert("Precisa de pelo menos 2 participantes.");
        return;
    }

    let sorteio;
    let valido = false;

    while (!valido) {
        sorteio = embaralhar([...listaAmigos]);
        valido = true;

        for (let i = 0; i < listaAmigos.length; i++) {
            if (listaAmigos[i] === sorteio[i]) {
                valido = false;
                break;
            }
        }
    }

    listaSorteados = [];
    document.getElementById("lista-sorteio").innerHTML = ""; // limpa antes de começar a revelar

    for (let i = 0; i < listaAmigos.length; i++) {
        setTimeout(function () {
            let duplaSorteada = listaAmigos[i] + " <> " + sorteio[i];
            listaSorteados.push(duplaSorteada);
            document.getElementById("lista-sorteio").innerHTML = listaSorteados.join(", ");
            console.log("Revelado:", duplaSorteada);
        }, i * 1000); // cada dupla espera 1 segundo a mais que a anterior
    }
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // troca as posições i e j
    }
    return array;
}

function reiniciar() {
    listaAmigos = [];
    listaSorteados = [];
    document.getElementById("lista-sorteio").innerHTML = "";
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("nome-amigo").value = "";
    document.getElementById("nome-amigo").focus();
}

function atualizarAmigos() {
    // document.getElementById("lista-amigos").innerHTML = listaAmigos.join(", ");
    // função lista e exclusão
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = listaAmigos[i];

        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function () {
            console.log("Amigo " + listaAmigos[i] + " será excluído da lista.");
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
        // fim função lista e exclusão
    }

    function excluirAmigo(index) {
        listaAmigos.splice(index, 1);
        atualizarAmigos();
        atualizarSorteio();
        console.log("Exclusão confirmada.");
    }

    function atualizarSorteio() {
        let sorteio = document.getElementById('lista-sorteio');
        sorteio.innerHTML = '';
    }
    // função caçada no google para ajustar nome
}

function formatarNomeComConectores(nomeCompleto) {
    let conectores = ['de', 'da', 'do', 'das', 'dos', 'e'];

    return nomeCompleto
        .toLowerCase()
        .split(' ')
        .map(palavra => {
            if (conectores.includes(palavra)) {
                return palavra; // Mantém tudo minúsculo se for conector
            }
            return palavra.charAt(0).toUpperCase() + palavra.slice(1);
        })
        .join(' ');
}




// parte desafios aula 06 lógica programacao
let resposta;
// 1. Crie uma função que valide se um número é positivo, negativo ou zero.

let resp1 = prompt("Digite um numero para classificar entre Positivo, Negativo ou Zero:");
numPosNegZero(resp1);
alert(resposta);

function numPosNegZero(num){
    if(num != 0){
        resposta = num > 0 ? "O numero é positivo!" : "O numero é negativo!";
        return resposta;
    }
    resposta = "O numero é zero!"
    return resposta;
}

// 2. Implemente uma função que verifique se uma pessoa é maior de idade.


let resp2 = prompt("Digite a idade da pessoa:");
pesMaiorIdade(resp2);
alert(resposta);

function pesMaiorIdade(idade){
    resposta = idade >= 18 ? "É maior de idade!" : "É menor de idade.";
    return resposta;
}

// 3. Desenvolva uma função que valide se uma string é vazia ou não.

let resp3 = prompt ("Digite uma string para validação (retorna se é vazio ou não):");
validaVazio(resp3);
alert (resposta);

function validaVazio(num){
    resposta = num === "" ? "A string está vazia!" : `A string ${num} não é vazio.`;
    return resposta;
}

// 4. Crie uma função que determine se um ano é bissexto

let resp4 = prompt ("Digite um ano para verificarmos se ele é bissexto:");
ehBissexto(resp4);
alert (resposta);

function ehBissexto(ano){
    resposta = (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0) ? "Ano é bissexto!" : "Ano não é bissexto!";
    return resposta;
}

// 5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.

let resp5A = Number(prompt ("Digite dois números para calcularmos a média, primeiro número:"));
let resp5B = Number(prompt ("Segundo número:"));
// tive que usar Number() para definir como número, estava testando apenas LET mas quando calculava ele transformata strings
// ex > (10 + 2) / 2 = 102 / 2 = 51 (...) só pela sintaxe
calcMedia(resp5A, resp5B);
alert (resposta);

function calcMedia(num1, num2){
    if (isNaN(num1) || isNaN (num2)){
        resposta = "Um dos valores digitados não é um número!";
    } else {
        resposta = (num1 + num2) / 2;
        console.log(num1);
        console.log(num2);
        console.log((num1 + num2)/2);
    }
    return resposta;
}

// 6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

let resp6Array = [];
let resp6

while (resp6 != "PARAR"){
    resp6 = prompt("Digite um valor para adicionar ao Array, o sistema para ao digitar a string PARAR:");
    resp6 != "PARAR" ? resp6Array.push(resp6) : console.log("Fim da alimentação do Array.");
}

verificaArray();
function verificaArray(){
    alert(`O tamanho do array cadastrado é de ${resp6Array.length}. \n Os dados do array são ${resp6Array}.`)
}

// 7. Crie um array e utilize a função includes para verificar se um elemento específico está presente

let arraySete = ['Banana', 'Pêra', 'Maçã', 'Laranja'];
console.log(arraySete);
let resp7 = prompt(`O array atual possui os seguintes dados [vide console], agora vamos conferir se ele contém o valor digitado:`);
arrayIncludes(resp7);

function arrayIncludes(inclui) {
    let confere = arraySete.includes(inclui) ? true : false;
    if (confere == true) {
        alert(`O valor ${inclui} já existe no array.`);
    } else {
        alert(`O valor ${inclui} não existe no array.`);
    }
}


// 8. Implemente uma função que receba um array e um elemento, e retorne se o elemento está presente no array.

let arrayOito = [10, 25, 35, 45, 55];
let confereOito = 12;

console.log(arrayOito);
alert(`Array está impresso no console, vamos conferir se o elemento ${confereOito} existe neste array.`)

let resposta = verificarOitoContem(arrayOito, confereOito);

function verificarOitoContem(array, item){
    return array.includes(item);
}

    alert(resposta == true ? "Elemento está presente." : "Elemento não está presente.");
*/

// 9. Crie um array de strings e utilize includes para verificar se uma determinada string está presente.
// (mesma que os anteriores, pulei)

// 10. Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

let personagem = [{
    nickname: "Nick",
    strength: 14,
    dexterity: 11,
    inteligence: 18
}]

console.log(personagem[0].nickname);
console.log("Retornando as chaves:");
console.log(Object.keys(personagem[0]));

console.log("Retornando os valores:");
console.log(Object.values(personagem[0]));

console.log("Retornando os pares:");
console.log(Object.entries(personagem[0]));

personagem.push({
    nickname: "Jhonny",
    strength: 18,
    dexterity: 15,
    inteligence: 12
})

personagem.forEach(p => {
    console.log(`${p.nickname} tem ${p.strength} de força.`);
});

console.log("______________________");
let player;

for (let i = 0; i < personagem.length; i++) {
    player = personagem[i];
    for (let [chave, valor] of Object.entries(player)) {
        console.log(`${chave}: ${valor}`);
    }
    console.log("");
}

function verificarObjetoNoArray(arr, objeto) {
    return arr.some(item => JSON.stringify(item) === JSON.stringify(objeto));
}

player = { nickname: "Jhonny", strength: 18, dexterity: 15, inteligence: 12 };
// player = personagem[0];
let personagemExiste = verificarObjetoNoArray(personagem, player);

if (personagemExiste) {
    console.log(`O ${player.nickname} existe.`);
} else {
    console.log(`O ${player.nickname} não existe.`);
}